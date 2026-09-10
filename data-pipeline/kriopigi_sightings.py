import json
import urllib.parse
import urllib.request
from pathlib import Path

API = "https://api.inaturalist.org/v1/observations"

# Tight box around Kriopigi and its adjacent eastern shoreline.
PARAMS = {
    "swlat": 40.025,
    "swlng": 23.465,
    "nelat": 40.070,
    "nelng": 23.510,
    "photos": "true",
    "order": "desc",
    "order_by": "observed_on",
    "per_page": 50,
    "not_user_id": "chrisa_kelley",
}

url = API + "?" + urllib.parse.urlencode(PARAMS)

req = urllib.request.Request(
    url,
    headers={"User-Agent": "Kriopigi-Shore-Guide/1.0"},
)

with urllib.request.urlopen(req, timeout=20) as response:
    payload = json.load(response)

sightings = []

for obs in payload.get("results", []):
    taxon = obs.get("taxon") or {}
    rank = taxon.get("rank")

    # Keep species-level or finer IDs only.
    if rank not in {"species", "subspecies", "variety", "form", "hybrid"}:
        continue

    photos = obs.get("photos") or []
    if not photos:
        continue

    photo_url = photos[0].get("url")
    if photo_url:
        photo_url = photo_url.replace("square", "medium")

    sightings.append(
        {
            "id": obs.get("id"),
            "observed_on": obs.get("observed_on"),
            "place_guess": obs.get("place_guess"),
            "species_guess": obs.get("species_guess"),
            "scientific_name": taxon.get("name"),
            "common_name": (taxon.get("preferred_common_name") or None),
            "rank": rank,
            "quality_grade": obs.get("quality_grade"),
            "observer": (obs.get("user") or {}).get("login"),
            "photo_url": photo_url,
            "url": f"https://www.inaturalist.org/observations/{obs.get('id')}",
        }
    )

    if len(sightings) >= 8:
        break

output = {
    "source": "iNaturalist",
    "area": "Kriopigi, Kassandra",
    "excluded_observer": "chrisa_kelley",
    "count": len(sightings),
    "sightings": sightings,
}

Path("data-pipeline/kriopigi_sightings.json").write_text(
    json.dumps(output, ensure_ascii=False, indent=2) + "\n"
)

print(f"Wrote {len(sightings)} sightings")
