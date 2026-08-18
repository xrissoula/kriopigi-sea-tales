/**
 * Greek translations, keyed by the exact English source string.
 * Any string without an entry falls back to English.
 */
import { elPages } from "./el.pages";
import { elFlora } from "./el.flora";

export const el: Record<string, string> = {
  ...elPages,
  ...elFlora,
  // --- Navigation / layout ---
  Home: "Αρχική",
  "Flora & Fauna": "Χλωρίδα & Πανίδα",
  Map: "Χάρτης",
  History: "Ιστορία",
  Voices: "Φωνές",
  Care: "Προστασία",
  Snorkel: "Κατάδυση",
  Sea: "Θάλασσα",
  Submit: "Συμμετοχή",
  About: "Σχετικά",
  "Shore Guide": "Οδηγός Ακτής",
  '"The shore remembers every visitor."': "«Η ακτή θυμάται κάθε επισκέπτη.»",
  "Kriopigi Shore Guide · Halkidiki, Greece":
    "Οδηγός Ακτής Κρυοπηγής · Χαλκιδική, Ελλάδα",
  English: "Αγγλικά",
  Greek: "Ελληνικά",

  // --- Home ---
  "Halkidiki · Kassandra Peninsula": "Χαλκιδική · Χερσόνησος Κασσάνδρας",
  "A field guide to the": "Ένας οδηγός πεδίου για την",
  "Kriopigi shore": "ακτή της Κρυοπηγής",
  "Walk the cove with us — through species, stories, and the slow language of the Aegean.":
    "Περπατήστε μαζί μας στον κόλπο — μέσα από είδη, ιστορίες και την αργή γλώσσα του Αιγαίου.",
  "Open the map": "Άνοιγμα χάρτη",
  "Aerial view of Kriopigi Beach at golden hour":
    "Αεροφωτογραφία της παραλίας Κρυοπηγής στο χρυσό φως",
  "A living archive": "Ένα ζωντανό αρχείο",
  "Where pine forest meets a wine-dark sea.":
    "Όπου το πευκοδάσος συναντά την οινοπόρφυρη θάλασσα.",
  "Kriopigi — \"cold spring\" — sits on the western Kassandra coast, a crescent of fine sand under Aleppo pines, looking out over what Homer called the oînops póntos, the wine-dark sea. This guide gathers what locals, scientists, and travelers have learned of its tides, meadows, and migrants.":
    "Η Κρυοπηγή — από την «κρύα πηγή» που της έδωσε το όνομά της — απλώνεται στη δυτική ακτή της Κασσάνδρας, μια ημισέληνος από ψιλή άμμο κάτω από χαλέπια πεύκα, με θέα σε αυτό που ο Όμηρος αποκάλεσε οἶνοπα πόντον, τη σκοτεινή σαν κρασί θάλασσα. Αυτός ο οδηγός συγκεντρώνει όσα έχουν μάθει οι κάτοικοι, οι επιστήμονες και οι ταξιδιώτες για τις παλίρροιες, τα λιβάδια και τους εποχικούς επισκέπτες της.",
  "Interactive Map": "Διαδραστικός Χάρτης",
  "Trails, springs, dive points & access notes.":
    "Μονοπάτια, πηγές, σημεία κατάδυσης και σημειώσεις πρόσβασης.",
  "Five ecological zones, from pine line to open sea.":
    "Πέντε οικολογικές ζώνες, από τη γραμμή των πεύκων έως την ανοιχτή θάλασσα.",
  Snorkeling: "Κατάδυση με αναπνευστήρα",
  "Three coves, mapped with depth & visibility.":
    "Τρεις κολπίσκοι, χαρτογραφημένοι με βάθος και ορατότητα.",
  Conservation: "Προστασία",
  "Posidonia meadows & how to tread lightly.":
    "Λιβάδια της Ποσειδωνίας και πώς να πατάμε ελαφρά.",
  Section: "Ενότητα",

  // --- Snorkeling ---
  "Below the line": "Κάτω από την επιφάνεια",
  "Three coves, three worlds": "Τρεις κολπίσκοι, τρεις κόσμοι",
  "Mask, fins, and a quiet kick are all you need. Always enter with a buddy and check the day's sea state.":
    "Μάσκα, πέδιλα και ήρεμες κινήσεις είναι όλα όσα χρειάζεστε. Μπαίνετε πάντα με συνοδό και ελέγχετε την κατάσταση της θάλασσας.",
  "North Cove": "Βόρειος Κολπίσκος",
  "Old Harbor Wall": "Παλιός Λιμενοβραχίονας",
  "South Pinnacle": "Νότια Ύφαλη Κορυφή",
  Beginner: "Αρχάριοι",
  Intermediate: "Μέσο επίπεδο",
  Advanced: "Προχωρημένοι",
  Depth: "Βάθος",
  Visibility: "Ορατότητα",
  "Wrasse, salema, sea hares grazing the seagrass tips.":
    "Χειλούδες, σάλπες και θαλάσσιοι λαγοί που βόσκουν στις κορυφές των φυκιών.",
  "Octopus dens between blocks; occasional moray.":
    "Φωλιές χταποδιών ανάμεσα στους ογκόλιθους· περιστασιακά σμέρνα.",
  "Damselfish clouds over rocky reef; rare scorpionfish.":
    "Σμήνη καστανόψαρων πάνω από βραχώδη ύφαλο· σπάνια σκορπίνα.",

  // --- About ---
  "A naturalist's notebook for a familiar shore":
    "Το σημειωματάριο ενός φυσιοδίφη για μια οικεία ακτή",
  "The Kriopigi Shore Guide is a personal, evolving project — part field journal, part living archive.":
    "Ο Οδηγός Ακτής Κρυοπηγής είναι ένα προσωπικό, εξελισσόμενο έργο — εν μέρει ημερολόγιο πεδίου, εν μέρει ζωντανό αρχείο.",
  "Birdwatching at dawn in a meadow above Kriopigi Beach, near my house in the Amparoudes.":
    "Παρατήρηση πουλιών την αυγή σε ένα λιβάδι πάνω από την παραλία Κρυοπηγής, κοντά στο σπίτι μου στους Αμπαρούδες.",
  "My name is Christina Anthemides-Kelley, and I am a Greek-American writer, sailor, and lifelong visitor to Kriopigi and the Kassandra peninsula. My family has deep roots in Greece, and I have spent much of my life returning to this coastline — swimming its coves, walking its forest paths, observing its seasonal changes, and slowly developing a deeper curiosity about the systems that shape it.":
    "Ονομάζομαι Χριστίνα Ανθεμίδη-Κέλλυ και είμαι Ελληνοαμερικανίδα συγγραφέας, ιστιοπλόος και δια βίου επισκέπτρια της Κρυοπηγής και της χερσονήσου της Κασσάνδρας. Η οικογένειά μου έχει βαθιές ρίζες στην Ελλάδα και έχω περάσει μεγάλο μέρος της ζωής μου επιστρέφοντας σε αυτή την ακτή — κολυμπώντας στους κόλπους της, περπατώντας τα δασικά μονοπάτια της, παρατηρώντας τις εποχικές αλλαγές της και αναπτύσσοντας σιγά σιγά μια βαθύτερη περιέργεια για τα συστήματα που τη διαμορφώνουν.",
  "Over time, I became increasingly interested not only in the beauty of the landscape, but in the relationships beneath it: the geology that formed the peninsula, the Mediterranean ecosystems that thrive here, the springs and drainage channels that connect hillside to sea, the underwater Posidonia meadows offshore, and the layers of human history embedded throughout the region.":
    "Με τον καιρό, άρχισα να ενδιαφέρομαι όχι μόνο για την ομορφιά του τοπίου, αλλά και για τις σχέσεις που κρύβονται κάτω από αυτό: τη γεωλογία που διαμόρφωσε τη χερσόνησο, τα μεσογειακά οικοσυστήματα που ευδοκιμούν εδώ, τις πηγές και τα ρέματα που συνδέουν την πλαγιά με τη θάλασσα, τα υποθαλάσσια λιβάδια της Ποσειδωνίας ανοιχτά της ακτής και τα στρώματα ανθρώπινης ιστορίας που είναι διάσπαρτα σε όλη την περιοχή.",
  "My background in sailing, natural history, conservation, preservation, and storytelling shaped the beginning of this project. What started as personal field notes and photography gradually evolved into an attempt to document Kriopigi as a living coastal system — one shaped by climate, ecology, tectonics, memory, and human activity across thousands of years.":
    "Το υπόβαθρό μου στην ιστιοπλοΐα, τη φυσική ιστορία, την προστασία, τη διατήρηση και τη διήγηση διαμόρφωσε την αρχή αυτού του έργου. Αυτό που ξεκίνησε ως προσωπικές σημειώσεις πεδίου και φωτογραφίες εξελίχθηκε σταδιακά σε μια προσπάθεια τεκμηρίωσης της Κρυοπηγής ως ζωντανού παράκτιου συστήματος — διαμορφωμένου από το κλίμα, την οικολογία, την τεκτονική, τη μνήμη και την ανθρώπινη δραστηριότητα επί χιλιάδες χρόνια.",
  "The Kriopigi Shore Guide is an evolving natural history and cultural landscape project combining ecology, geology, oral history, photography, and geospatial storytelling. My hope is that it becomes both a long-term archive and an invitation to observe the coastline with greater depth, curiosity, and care.":
    "Ο Οδηγός Ακτής Κρυοπηγής είναι ένα εξελισσόμενο έργο φυσικής ιστορίας και πολιτισμικού τοπίου που συνδυάζει οικολογία, γεωλογία, προφορική ιστορία, φωτογραφία και γεωχωρική διήγηση. Ελπίδα μου είναι να γίνει τόσο ένα μακροπρόθεσμο αρχείο όσο και μια πρόσκληση να παρατηρήσουμε την ακτή με μεγαλύτερο βάθος, περιέργεια και φροντίδα.",
};
