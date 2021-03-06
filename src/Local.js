
/*
	JavaScript file acting as the localisation file.

	Certainly not optimal, but I did not have the luxury of dealing with scanning server (?)
	directories for individual localisation files at the time of implementation.
	Maybe after the course project evaluation is finished...
 */
const local = [
	{
		language: "English",
		title: "Segmented Timer Page",
		settingsText: {
			fileio: "File Import/Export",
			fileioSub: "Download your (current) segments locally to your system, or load previously downloaded segments.",
			selectFile: "Select File:",
			import: "Load selected file",
			export: "Download segments as .json",
			language: "Language:"
		},
		help: {
			heading: "Hello! Welcome to the Segmented Timer Page!",
			list: [
				"Get started by clicking the '+' (add) button to add a new segment.",
				"Give the segment a non-blank name and a non-zero time (minutes:seconds).",
				"Click 'Save' to save the segment.",
				"Repeat (1-3) as many times to add more segments to your liking.",
				"Press the play button to start the timer! You can watch the segments time as well.",
				"Press the pause button to pause the timer.",
				"Press the stop button to stop and reset the timer.",
				"Press the checkmark button to finish the current segment, and jump to the next."
			],
			notes: [
				"*You can edit and delete existing segments by, first clicking on the segment (will highlight the segment in light blue), then clicking the pencil (edit) button or trash can (delete) button, respectively.",
				"The segmented timer was created to assist users in practicing completing a segmented activity in a timely matter.",
				"The idea was born of taking a stopwatch's lap function and applying it to a standard countdown timer.",
				"Instead of aiming to achieving the smallest lap, Segmented Timer users would plan out the sequence of timed activities/goals (segments) in advance, and aim to complete each activity/goal within their time limits.",
				"In this manner, users can readily track how much time is left and which activities/goals are up next. Users also are relieved of having to repeatedly reset and restart a single timer to achieve something similar with a standard timer.",
				"To account for users possibly taking longer or shorter for specific segments than the planned amount of time, this timer also features a function similar to a stopwatch's laps, which shall be called 'finish times'.",
				"If users finish earlier than intended, users may notify the timer with the checkmark (finish current segment) button. The timer will jump to the next segment, while carrying over the remaining time of the previous segment.",
				"If users take longer than intended (enter overtime), users can see how much longer they are taking (or have taken) as the segment's timer turns red and beings seeping to the negatives. Users should also note that the next segment will begin counting down as well, once in overtime!",
				"To better process the results, users should know that a green positive time is the amount of time they've saved for a segment. Conversely, a red negative time is the amount of additional time they've lost for that segment.",
				"In the Settings panel, users can download their timer segments as .json objects for reuse, or change languages. Check the Settings panel out!"
			]
		},
		tooltips: {		
			settings: "Settings",
			help: "Help",
			exit: "Exit panel / Return to timer",
			play: "Start/Play timer",
			pause: "Pause timer",
			stop: "Stop and reset timer",
			finish: "Finish current segment",
			add: "Add segment",
			edit: "Edit selected segment",
			delete: "Delete selected segment",
			clear: "Clear segment table"
		},
		segment: {
			namePH: "Segment name (letters, numbers, spaces, underscores)",
			timePH: "0:00 (non-zero)",
			save: "Save",
			cancel: "Cancel"
		}
	},
	{	// "Translated" using Google Translate... Appropriate localisation welcome, for anyone that finds this project...
		language: "Fran??ais",
		title: "Page Minuterie segment??e",
		settingsText: {
			fileio: "Importation/exportation de fichiers",
			fileioSub: "T??l??chargez vos segments (actuels) localement sur votre syst??me ou chargez des segments pr??c??demment t??l??charg??s.",
			selectFile: "Choisir le dossier:",
			import: "Charger le fichier s??lectionn??",
			export: "T??l??charger les segments au format .json",
			language: "Langue:"
		},
		help: {
			heading: "Bonjour! Bienvenue sur la page du minuteur segment??!",
			list: [
				"Commencez par cliquer sur le bouton \"+\" (ajouter) pour ajouter un nouveau segment.",
				"Donnez au segment un nom non vide et une dur??e non nulle (minutes:secondes).",
				"Cliquez sur 'Enregistrer' pour enregistrer le segment.",
				"R??p??tez (1-3) autant de fois pour ajouter plus de segments ?? votre go??t.",
				"Appuyez sur le bouton de lecture pour d??marrer la minuterie! Vous pouvez ??galement regarder l'heure des segments.",
				"Appuyez sur le bouton pause pour mettre la minuterie en pause.",
				"Appuyez sur le bouton d'arr??t pour arr??ter et r??initialiser la minuterie.",
				"Appuyez sur le bouton coche pour terminer le segment en cours et passer au suivant."
			],
			notes: [
				"*Vous pouvez modifier et supprimer des segments existants en cliquant d'abord sur le segment (cela mettra le segment en surbrillance en bleu clair), puis en cliquant sur le bouton crayon (modifier) ou sur le bouton poubelle (supprimer), respectivement.",	
				"Le minuteur segment?? a ??t?? cr???? pour aider les utilisateurs ?? s'entra??ner ?? effectuer une activit?? segment??e en temps opportun.",
				"L'id??e est n??e de prendre une fonction chronom??tre et de l'appliquer ?? un compte ?? rebours standard.",
				"Au lieu de viser ?? r??aliser le plus petit tour, les utilisateurs du chronom??tre segment?? planifieraient ?? l'avance la s??quence d'activit??s/objectifs chronom??tr??s (segments) et viseraient ?? terminer chaque activit??/objectif dans leurs limites de temps.",
				"De cette mani??re, les utilisateurs peuvent facilement suivre le temps qu'il leur reste et les activit??s/objectifs ?? venir. Les utilisateurs sont ??galement soulag??s d'avoir ?? r??initialiser et ?? red??marrer ?? plusieurs reprises une seule minuterie pour obtenir quelque chose de similaire avec une minuterie standard.",
				"Pour tenir compte des utilisateurs prenant ??ventuellement plus ou moins longtemps pour des segments sp??cifiques que le temps pr??vu, ce chronom??tre dispose ??galement d'une fonction similaire aux tours d'un chronom??tre, qui sera appel??e ??temps d'arriv??e??.",
				"Si les utilisateurs terminent plus t??t que pr??vu, les utilisateurs peuvent avertir le chronom??tre avec le bouton coche (terminer le segment en cours). Le chronom??tre passera au segment suivant, tout en reportant le temps restant du segment pr??c??dent.",
				"Si les utilisateurs prennent plus de temps que pr??vu (entrer des heures suppl??mentaires), les utilisateurs peuvent voir combien de temps ils prennent (ou ont pris) lorsque la minuterie du segment devient rouge et que les ??tres s'infiltrent dans les n??gatifs. Les utilisateurs doivent ??galement noter que le prochain segment commencera ??galement ?? d??compter, une fois en prolongation!",
				"Pour mieux traiter les r??sultats, les utilisateurs doivent savoir qu'un temps vert positif correspond au temps qu'ils ont gagn?? pour un segment. ?? l'inverse, un temps n??gatif rouge correspond au temps suppl??mentaire qu'ils ont perdu pour ce segment.",
				"Dans le panneau R??glages et Param??tres, les utilisateurs peuvent t??l??charger leurs segments de minuterie en tant qu'objets .json pour les r??utiliser, ou changer de langue. V??rifiez le panneau R??glages et Param??tres!"
			]
		},
		tooltips: {		
			settings: "R??glages et Param??tres",
			help: "Des instructions",
			exit: "Panneau de sortie / Retour ?? la minuterie",
			play: "D??marrer la minuterie",
			pause: "Mettre le chronom??tre en pause",
			stop: "Arr??ter et r??initialiser la minuterie",
			finish: "Terminer le segment en cours",
			add: "Ajouter un segment",
			edit: "Modifier le segment s??lectionn??",
			delete: "Supprimer le segment s??lectionn??",
			clear: "Effacer le tableau des segments"
		},
		segment: {
			namePH: "Nom du segment (lettres, chiffres, espaces, traits de soulignement)",
			timePH: "0:00 (non nul)",
			save: "Enregistrer",
			cancel: "Annuler"
		}
	}
];

export default local;