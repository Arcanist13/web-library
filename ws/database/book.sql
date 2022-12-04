CREATE TABLE books (
  id              INTEGER PRIMARY KEY NOT NULL,
  name            TEXT NOT NULL,
  authour         TEXT NOT NULL,
  genres          TEXT,
  series_name     TEXT,
  series_number   INTEGER,
  series_total    INTEGER,
  image_full      TEXT,
  image_icon      TEXT
);

INSERT INTO books VALUES(NULL,'The Fellowship of the Ring','J.R.R. Tolkien','Fantasy','Middle-Earth/Lord of the Rings',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Two Towers','J.R.R. Tolkien','Fantasy','Middle-Earth/Lord of the Rings',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Return of the King','J.R.R. Tolkien','Fantasy','Middle-Earth/Lord of the Rings',3,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The History of Middle Earth I','J.R.R. Tolkien/Christopher Tolkien','Fantasy','Middle-Earth/History of Middle-Earth',1,1,NULL,NULL);
INSERT INTO books VALUES(NULL,'The History of Middle Earth II','J.R.R. Tolkien/Christopher Tolkien','Fantasy','Middle-Earth/History of Middle-Earth',2,2,NULL,NULL);
INSERT INTO books VALUES(NULL,'The History of Middle Earth III','J.R.R. Tolkien/Christopher Tolkien','Fantasy','Middle-Earth/History of Middle-Earth',3,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Silmarillion','J.R.R. Tolkien/Christopher Tolkien','Fantasy','Middle-Earth',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Silmarillion','J.R.R. Tolkien/Christopher Tolkien','Fantasy','Middle-Earth',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Book of Lost Tales I','J.R.R. Tolkien/Christopher Tolkien','Fantasy','Middle-Earth',1,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Book of Lost Tales II','J.R.R. Tolkien/Christopher Tolkien','Fantasy','Middle-Earth',2,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Lays of Beleriand','J.R.R. Tolkien/Christopher Tolkien','Fantasy','Middle-Earth',3,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'Unfinished Tales','J.R.R. Tolkien/Christopher Tolkien','Fantasy','Middle-Earth',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Children of Hurin','J.R.R. Tolkien/Christopher Tolkien','Fantasy','Middle-Earth',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Hobbit','J.R.R. Tolkien','Fantasy','Middle-Earth',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Tales from the Perilous Realm','J.R.R. Tolkien','Fantasy',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Legend of Sigurd & Gudrun','J.R.R. Tolkien/Christopher Tolkien','Fantasy',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Complete Guide to Middle-Earth','Robert Foster','Nonfiction','Middle-Earth',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Letters from Father Christmas','J.R.R. Tolkien/Baillie Tolkien','10',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Master of Middle-Earth the achievements of J.R.R Tolkien','Paul Kocher','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Beowulf','Unknown/J.R.R. Tolkien/Christopher Tolkien','Fantasy',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Story of Kullervo','J.R.R. Tolkien/Christopher Tolkien','Fantasy',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Fall of Arthur','J.R.R. Tolkien/Christopher Tolkien','Fantasy',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Fall of Gondolin','J.R.R. Tolkien/Christopher Tolkien','Fantasy','Middle-Earth',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'A Tolkien Bestiary','David Day','Nonfiction','Middle-Earth',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Lord of the Rings: Weapons and Warfare','Chris Smith','Nonfiction','Middle-Earth',NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Stolen Throne','David Gaider','Fantasy','Dragon Age',1,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Calling','David Gaider','Fantasy','Dragon Age',2,6,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Last Wish','Andrzej Sapkowski','Fantasy','The Witcher',NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'Before the Storm','Christie Golden','Fantasy','World of Warcraft',15,18,NULL,NULL);

INSERT INTO books VALUES(NULL,'First King of Shannara','Terry Brooks','Fantasy','Shannara',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Sword of Shannara','Terry Brooks','Fantasy','Shannara/The Sword of Shannara',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Elfstones of Shannara','Terry Brooks','Fantasy','Shannara/The Sword of Shannara',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Wishsong of Shannara','Terry Brooks','Fantasy','Shannara/The Sword of Shannara',3,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Scions of Shannara','Terry Brooks','Fantasy','Shannara/Heritage of Shannara',1,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Druid of Shannara','Terry Brooks','Fantasy','Shannara/Heritage of Shannara',2,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Elf Queen of Shannara','Terry Brooks','Fantasy','Shannara/Heritage of Shannara',3,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Talismans of Shannara','Terry Brooks','Fantasy','Shannara/Heritage of Shannara',4,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'Ilse Witch','Terry Brooks','Fantasy','Shannara/The Voyage of the Jerle Shannara',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Wards of Faerie','Terry Brooks','Fantasy','Shannara/The Dark Legacy of Shannara',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Bloodfire Quest','Terry Brooks','Fantasy','Shannara/The Dark Legacy of Shannara',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Witch Wraith','Terry Brooks','Fantasy','Shannara/The Dark Legacy of Shannara',3,3,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Field Guide','Tony DiTrelizzi/Holly Black','Fantasy/Children''s','The Spiderwick Chronicles',1,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Seeing Stone','Tony DiTrelizzi/Holly Black','Fantasy/Children''s','The Spiderwick Chronicles',2,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'Lucinda''s Secret','Tony DiTrelizzi/Holly Black','Fantasy/Children''s','The Spiderwick Chronicles',3,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Ironwood Tree','Tony DiTrelizzi/Holly Black','Fantasy/Children''s','The Spiderwick Chronicles',4,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Wrath of Mulgarath','Tony DiTrelizzi/Holly Black','Fantasy/Children''s','The Spiderwick Chronicles',5,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Nixie''s Song','Tony DiTrelizzi/Holly Black','Fantasy/Children''s','Beyond The Spiderwick Chronicles',1,3,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Lightning Thief','Rick Riordan','Fantasy/Young Adult/Mythology','Percy Jackson & the Olympians',1,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Sea of Monsters','Rick Riordan','Fantasy/Young Adult/Mythology','Percy Jackson & the Olympians',2,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Titan''s Curse','Rick Riordan','Fantasy/Young Adult/Mythology','Percy Jackson & the Olympians',3,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Battle of the Labyrinth','Rick Riordan','Fantasy/Young Adult/Mythology','Percy Jackson & the Olympians',4,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Last Olympian','Rick Riordan','Fantasy/Young Adult/Mythology','Percy Jackson & the Olympians',5,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Greek Gods','Rick Riordan','Fantasy/Young Adult/Mythology','Percy Jackson',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Lost Hero','Rick Riordan','Fantasy/Young Adult/Mythology','The Heroes of Olympus',1,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Son of Neptune','Rick Riordan','Fantasy/Young Adult/Mythology','The Heroes of Olympus',2,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Red Pyramid','Rick Riordan','Fantasy/Young Adult/Mythology','The Kane Chronicles',1,3,NULL,NULL);

INSERT INTO books VALUES(NULL,'Sea of Death','Gary Gygax','Fantasy','Gord the Rogue',1,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'Night Arrant','Gary Gygax','Fantasy','Gord the Rogue',2,5,NULL,NULL);

INSERT INTO books VALUES(NULL,'Wyrd Sisters','Terry Pratchett','Fantasy','Discworld/Witches',2,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Lords and Ladies','Terry Pratchett','Fantasy','Discworld/Witches',4,6,NULL,NULL);

INSERT INTO books VALUES(NULL,'Test of the Twins','Margaret Weis/Tracy Hickman','Fantasy','DragonLance/Legends',3,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Theros Ironfeld','Don Perrin','Fantasy','DragonLance/The Warriors',4,7,NULL,NULL);
INSERT INTO books VALUES(NULL,'Conundrum','Jeff Crook','Fantasy','DragonLance/Age of Mortals',1,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Lake of Death','Jean Rabe','Fantasy','DragonLance/Age of Mortals',6,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Darkness & Light','Paul B. Thompson/Tonya Carter Cook','Fantasy','DragonLance/Preludes',1,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Kendermore','Mary Kirchoff','Fantasy','DragonLance/Preludes',2,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Flint the King','Mary Kirchoff/Douglas Niles','Fantasy','DragonLance/Preludes',5,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Tanis, the Shadow Years','Barbara Siegel/Scott Siegel','Fantasy','DragonLance/Preludes',6,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Rose and the Skull','Jeff Crook','Fantasy','DragonLance/Bridge of Time',4,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'Firstborn','Paul B. Thompson/Tonya C. Cook','Fantasy','DragonLance/Elven Nations',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Kinslayer Wars','Douglas Niles','Fantasy','DragonLance/Elven Nations',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Qualinesti','Paul B. Thompson/Tonya C. Cook','Fantasy','DragonLance/Elven Nations',3,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Messenger','Douglas Niles','Fantasy','DragonLance/Icewall',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Middle of Nowhere','Paul B. Thompson','Fantasy','DragonLance/Crossroads',5,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'Children of the Plains','Tonya C. Cook/Paul B. Thompson','Fantasy','DragonLance/Barbarians',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Inheritance','Nancy Varian Berberick','Fantasy','DragonLance/Classics',4,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Medusa Plague','Mary Kirchoff','Fantasy','DragonLance/Defenders of Magic',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Seventh Sentinel','Mary Kirchoff','Fantasy','DragonLance/Defenders of Magic',3,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dragons of a Autumn Twilight','Margaret Weis/Tracy Hickman','Fantasy','DragonLance/The Chronicles',1,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dragons of a Winter Night','Margaret Weis/Tracy Hickman','Fantasy','DragonLance/The Chronicles',2,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dragons of a Spring Dawning','Margaret Weis/Tracy Hickman','Fantasy','DragonLance/The Chronicles',3,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dragons of a Summer Flame','Margaret Weis/Tracy Hickman','Fantasy','DragonLance/The Chronicles',4,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dragons of a Fallen Sun','Margaret Weis/Tracy Hickman','Fantasy','DragonLance/The War of Souls',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dragons of a Vanished Moon','Margaret Weis/Tracy Hickman','Fantasy','DragonLance/The War of Souls',3,3,NULL,NULL);

INSERT INTO books VALUES(NULL,'Wizard''s First Rule','Terry Goodkind','Fantasy','Sword of Truth',3,17,NULL,NULL);
INSERT INTO books VALUES(NULL,'Stone of Tears','Terry Goodkind','Fantasy','Sword of Truth',4,17,NULL,NULL);
INSERT INTO books VALUES(NULL,'Blood of the Fold','Terry Goodkind','Fantasy','Sword of Truth',5,17,NULL,NULL);
INSERT INTO books VALUES(NULL,'Temple of the Winds','Terry Goodkind','Fantasy','Sword of Truth',6,17,NULL,NULL);
INSERT INTO books VALUES(NULL,'Soul of the Fire','Terry Goodkind','Fantasy','Sword of Truth',7,17,NULL,NULL);
INSERT INTO books VALUES(NULL,'Faith of the Fallen','Terry Goodkind','Fantasy','Sword of Truth',8,17,NULL,NULL);

INSERT INTO books VALUES(NULL,'Forging the Darksword','Margaret Weis/Tracy Hickman','Fantasy','Darksword Trilogy',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Doom of the Darksword','Margaret Weis/Tracy Hickman','Fantasy','Darksword Trilogy',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Triumph of the Darksword','Margaret Weis/Tracy Hickman','Fantasy','Darksword Trilogy',3,3,NULL,NULL);

INSERT INTO books VALUES(NULL,'The First Chronicles of Thomas Covenant the Unbeliever','Stephen Donaldson','Fantasy','The Chronicles of Thomas Covenant',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Wounded Land','Stephen Donaldson','Fantasy','The Second Chronicles of Thomas Covenant',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The One Tree','Stephen Donaldson','Fantasy','The Second Chronicles of Thomas Covenant',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'White Gold Wielder','Stephen Donaldson','Fantasy','The Second Chronicles of Thomas Covenant',3,3,NULL,NULL);

INSERT INTO books VALUES(NULL,'Homeland','R.A. Salvatore','Fantasy','Forgotten Realms/The Dark Elf Trilogy',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Exile','R.A. Salvatore','Fantasy','Forgotten Realms/The Dark Elf Trilogy',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Shadowdale','Scott Ciencin','Fantasy','Forgotten Realms/The Avatar Series',1,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'In Sylvan Shadows','R.A. Salvatore','Fantasy','Forgotten Realms/The Cleric Quintet',2,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'Night Masks','R.A. Salvatore','Fantasy','Forgotten Realms/The Cleric Quintet',3,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Fallen Fortress','R.A. Salvatore','Fantasy','Forgotten Realms/The Cleric Quintet',4,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Chaos Curse','R.A. Salvatore','Fantasy','Forgotten Realms/The Cleric Quintet',5,5,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Legacy','R.A. Salvatore','Fantasy','Forgotten Realms/Legacy of the Drow',1,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Starless Night','R.A. Salvatore','Fantasy','Forgotten Realms/Legacy of the Drow',2,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Silverfall','Ed Greenwood','Fantasy','Forgotten Realms',NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'Eragon','Christopher Paolini','Fantasy/Young Adult','The Inheritance Cycle',1,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Eldest','Christopher Paolini','Fantasy/Young Adult','The Inheritance Cycle',2,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Inheritance','Christopher Paolini','Fantasy/Young Adult','The Inheritance Cycle',3,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Brisinger','Christopher Paolini','Fantasy/Young Adult','The Inheritance Cycle',4,4,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Ruins of Gorlan','John Flanagan','Fantasy/Young Adult','Ranger''s Apprentice',1,16,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Burning Bridge','John Flanagan','Fantasy/Young Adult','Ranger''s Apprentice',2,16,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Icebound Land','John Flanagan','Fantasy/Young Adult','Ranger''s Apprentice',3,16,NULL,NULL);
INSERT INTO books VALUES(NULL,'Oakleaf Bearers','John Flanagan','Fantasy/Young Adult','Ranger''s Apprentice',4,16,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Sorcerer in the North','John Flanagan','Fantasy/Young Adult','Ranger''s Apprentice',5,16,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Siege of Macindaw','John Flanagan','Fantasy/Young Adult','Ranger''s Apprentice',6,16,NULL,NULL);
INSERT INTO books VALUES(NULL,'Erak''s Ransom','John Flanagan','Fantasy/Young Adult','Ranger''s Apprentice',7,16,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Royal Ranger','John Flanagan','Fantasy/Young Adult','Ranger''s Apprentice',12,16,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Stone Mage & the Sea','Sean Williams','Fantasy/Young Adult','The Change',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Sky Warden & the Sun','Sean Williams','Fantasy/Young Adult','The Change',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Storm Weaver & the Sand','Sean Williams','Fantasy/Young Adult','The Change',3,3,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Spook''s Apprentice','Joseph Delaney','Fantasy/Young Adult/Horror','Spooks/The Wardstone Chronicles',1,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Spook''s Curse','Joseph Delaney','Fantasy/Young Adult/Horror','Spooks/The Wardstone Chronicles',2,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Spook''s Secret','Joseph Delaney','Fantasy/Young Adult/Horror','Spooks/The Wardstone Chronicles',3,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Spook''s Battle','Joseph Delaney','Fantasy/Young Adult/Horror','Spooks/The Wardstone Chronicles',4,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'Spook''s: Alice','Joseph Delaney','Fantasy/Young Adult/Horror','Spooks/The Wardstone Chronicles',12,13,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Forests of Silence','Emily Rodda','Fantasy/Children''s','Deltora Quest',1,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Lake of Tears','Emily Rodda','Fantasy/Children''s','Deltora Quest',2,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'City of the Rats','Emily Rodda','Fantasy/Children''s','Deltora Quest',3,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Shifting Sands','Emily Rodda','Fantasy/Children''s','Deltora Quest',4,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dread Mountain','Emily Rodda','Fantasy/Children''s','Deltora Quest',5,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Maze of the Beast','Emily Rodda','Fantasy/Children''s','Deltora Quest',6,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Valley of the Lost','Emily Rodda','Fantasy/Children''s','Deltora Quest',7,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'Return to Del','Emily Rodda','Fantasy/Children''s','Deltora Quest',8,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'Cavern of The Fear','Emily Rodda','Fantasy/Children''s','Deltora Quest/Deltora Shadowlands',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Isle of Illusion','Emily Rodda','Fantasy/Children''s','Deltora Quest/Deltora Shadowlands',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Shadowlands','Emily Rodda','Fantasy/Children''s','Deltora Quest/Deltora Shadowlands',3,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Deltora Quest 3','Emily Rodda','Fantasy/Children''s','Deltora Quest/Dragons of Deltora',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Key to Rondo','Emily Rodda','Fantasy/Children''s','Rondo',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Land of Dragons','Emily Rodda','Fantasy/Children''s','Deltora',NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'Slaves of Quentaris','Paul Collins','Fantasy','The Quentaris Chronicles',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Skyflower','Justin D''Ath','Fantasy','The Quentaris Chronicles',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Pirates of Quentaris','Sherryl Clark','Fantasy','The Quentaris Chronicles',NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'Skulduggery Pleasant','Derek Landy','Fantasy/Young Adult/Mystery','Skulduggery Pleasant',1,9,NULL,NULL);
INSERT INTO books VALUES(NULL,'Playing with Fire','Derek Landy','Fantasy/Young Adult/Mystery','Skulduggery Pleasant',2,9,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Faceless Ones','Derek Landy','Fantasy/Young Adult/Mystery','Skulduggery Pleasant',3,9,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dark Days','Derek Landy','Fantasy/Young Adult/Mystery','Skulduggery Pleasant',4,9,NULL,NULL);
INSERT INTO books VALUES(NULL,'Mortal Coil','Derek Landy','Fantasy/Young Adult/Mystery','Skulduggery Pleasant',5,9,NULL,NULL);
INSERT INTO books VALUES(NULL,'Death Bringer','Derek Landy','Fantasy/Young Adult/Mystery','Skulduggery Pleasant',6,9,NULL,NULL);
INSERT INTO books VALUES(NULL,'Kingdom of the Wicked','Derek Landy','Fantasy/Young Adult/Mystery','Skulduggery Pleasant',7,9,NULL,NULL);
INSERT INTO books VALUES(NULL,'Last Stand of Dead Men','Derek Landy','Fantasy/Young Adult/Mystery','Skulduggery Pleasant',8,9,NULL,NULL);
INSERT INTO books VALUES(NULL,'The End of the World','Derek Landy','Fantasy/Young Adult/Mystery','Skulduggery Pleasant',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Armageddon Outta Here','Derek Landy','Fantasy/Young Adult/Mystery','Skulduggery Pleasant',NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'City of Bones','Cassandra Clare','Fantasy/Young Adult/Romance','The Mortal Instruments',1,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'City of Ashes','Cassandra Clare','Fantasy/Young Adult/Romance','The Mortal Instruments',2,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'City of Glass','Cassandra Clare','Fantasy/Young Adult/Romance','The Mortal Instruments',3,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'City of Fallen Angels','Cassandra Clare','Fantasy/Young Adult/Romance','The Mortal Instruments',4,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'City of Lost Souls','Cassandra Clare','Fantasy/Young Adult/Romance','The Mortal Instruments',5,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'City of Heavenly Fire','Cassandra Clare','Fantasy/Young Adult/Romance','The Mortal Instruments',6,6,NULL,NULL);

INSERT INTO books VALUES(NULL,'Artemis Fowl','Eoin Colfer','Fantasy/Young Adult','The Fowl Adventures',1,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Arctic Incident','Eoin Colfer','Fantasy/Young Adult','The Fowl Adventures',2,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Eternity Code','Eoin Colfer','Fantasy/Young Adult','The Fowl Adventures',3,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Lost Colony','Eoin Colfer','Fantasy/Young Adult','The Fowl Adventures',5,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Time Paradox','Eoin Colfer','Fantasy/Young Adult','The Fowl Adventures',6,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Altantis Complex','Eoin Colfer','Fantasy/Young Adult','The Fowl Adventures',7,8,NULL,NULL);

INSERT INTO books VALUES(NULL,'Magyk','Angie Sage','Fantasy/Young Adult','Septimus Heap',1,7,NULL,NULL);
INSERT INTO books VALUES(NULL,'Flyte','Angie Sage','Fantasy/Young Adult','Septimus Heap',2,7,NULL,NULL);
INSERT INTO books VALUES(NULL,'Physik','Angie Sage','Fantasy/Young Adult','Septimus Heap',3,7,NULL,NULL);

INSERT INTO books VALUES(NULL,'Divergent','Veronica Roth','Science Fiction/Young Adult/Dystopia','Divergent',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Insurgent','Veronica Roth','Science Fiction/Young Adult/Dystopia','Divergent',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Allegiant','Veronica Roth','Science Fiction/Young Adult/Dystopia','Divergent',3,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Four','Veronica Roth','Science Fiction/Young Adult/Dystopia','Divergent',NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Maze Runner','James Dashner','Science Fiction/Young Adult/Dystopia','The Maze Runner',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Scorch Trials','James Dashner','Science Fiction/Young Adult/Dystopia','The Maze Runner',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Death Cure','James Dashner','Science Fiction/Young Adult/Dystopia','The Maze Runner',3,3,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Hunger Games','Suzanne Collins','Science Fiction/Young Adult/Dystopia','The Hunger Games',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Catching Fire','Suzanne Collins','Science Fiction/Young Adult/Dystopia','The Hunger Games',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Mockingjay','Suzanne Collins','Science Fiction/Young Adult/Dystopia','The Hunger Games',3,3,NULL,NULL);

INSERT INTO books VALUES(NULL,'Mortal Engines','Philip Reeve','Science Fiction/Young Adult/Dystopia','Mortal Engines',1,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Predator''s Gold','Philip Reeve','Science Fiction/Young Adult/Dystopia','Mortal Engines',2,4,NULL,NULL);

INSERT INTO books VALUES(NULL,'Dune','Frank Herbert','Science Fiction','Dune',1,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dune Messiah','Frank Herbert','Science Fiction','Dune',2,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'Children of Dune','Frank Herbert','Science Fiction','Dune',3,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'God Emperor of Dune','Frank Herbert','Science Fiction','Dune',4,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'Heretics of Dune','Frank Herbert','Science Fiction','Dune',5,8,NULL,NULL);
INSERT INTO books VALUES(NULL,'Chapter House Dune','Frank Herbert','Science Fiction','Dune',6,8,NULL,NULL);

INSERT INTO books VALUES(NULL,'David Starr, Space Ranger','Isaac Asimov','Science Fiction','Lucky Starr',1,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Lucky Starr and the Pirates of the Asteroids','Isaac Asimov','Science Fiction','Lucky Starr',2,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Lucky Starr and the Oceans of Venus','Isaac Asimov','Science Fiction','Lucky Starr',3,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Lucky Starr and the Big Sun of Mercury','Isaac Asimov','Science Fiction','Lucky Starr',4,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Lucky Starr and the Moons of Jupiter','Isaac Asimov','Science Fiction','Lucky Starr',5,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Lucky Starr and the Rings of Saturn','Isaac Asimov','Science Fiction','Lucky Starr',6,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Pebble in the Sky','Isaac Asimov','Science Fiction','Galactic Empire',3,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The End of Eternity','Isaac Asimov','Science Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Naked Sun','Isaac Asimov','Science Fiction','Robot',2,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Robots of Dawn','Isaac Asimov','Science Fiction','Robot',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Robot Dreams','Isaac Asimov','Science Fiction','Robot',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Foundation and Earth','Isaac Asimov','Science Fiction','Foundation',5,7,NULL,NULL);
INSERT INTO books VALUES(NULL,'Frontiers','Isaac Asimov','Science Fiction',NULL,NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Recruit','Robert Muchamore','Fiction/Young Adult/Action','CHERUB',1,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'Class A','Robert Muchamore','Fiction/Young Adult/Action','CHERUB',2,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'Maximum Security','Robert Muchamore','Fiction/Young Adult/Action','CHERUB',3,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Killing','Robert Muchamore','Fiction/Young Adult/Action','CHERUB',4,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'Divine Madness','Robert Muchamore','Fiction/Young Adult/Action','CHERUB',5,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'Man vs Beast','Robert Muchamore','Fiction/Young Adult/Action','CHERUB',6,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Fall','Robert Muchamore','Fiction/Young Adult/Action','CHERUB',7,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'Mad Dogs','Robert Muchamore','Fiction/Young Adult/Action','CHERUB',8,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Sleepwalker','Robert Muchamore','Fiction/Young Adult/Action','CHERUB',9,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'The General','Robert Muchamore','Fiction/Young Adult/Action','CHERUB',10,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'Brigands M.C.','Robert Muchamore','Fiction/Young Adult/Action','CHERUB',11,12,NULL,NULL);
INSERT INTO books VALUES(NULL,'Shadow Wave','Robert Muchamore','Fiction/Young Adult/Action','CHERUB',12,12,NULL,NULL);

INSERT INTO books VALUES(NULL,'Ice Station','Matthew Reilly','Fiction/Action','Shane Schofield',1,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Area 7','Matthew Reilly','Fiction/Action','Shane Schofield',2,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Scarecrow','Matthew Reilly','Fiction/Action','Shane Schofield',3,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Hell Island','Matthew Reilly','Fiction/Action','Shane Schofield',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Scarecrow and the Army of Thieves','Matthew Reilly','Fiction/Action','Shane Schofield',4,4,NULL,NULL);

INSERT INTO books VALUES(NULL,'Seven Ancient Wonders','Matthew Reilly','Fiction/Action','Jack West Jr',1,7,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Six Sacred Stones','Matthew Reilly','Fiction/Action','Jack West Jr',2,7,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Five Greatest Warriors','Matthew Reilly','Fiction/Action','Jack West Jr',3,7,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Four Legendary Kingdoms','Matthew Reilly','Fiction/Action','Jack West Jr',4,7,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Three Secret Cities','Matthew Reilly','Fiction/Action','Jack West Jr',5,7,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Two Lost Mountains','Matthew Reilly','Fiction/Action','Jack West Jr',6,7,NULL,NULL);
INSERT INTO books VALUES(NULL,'The One Impossible Labyrinth','Matthew Reilly','Fiction/Action','Jack West Jr',7,7,NULL,NULL);

INSERT INTO books VALUES(NULL,'Miss Peregrine''s Home for Peculiar Children','Ransom Riggs','Fantasy/Young Adult/Mystery','Miss Peregrine''s Peculiar Children',1,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Deathly Hallows','J.K. Rowling','Fantasy/Young Adult','Harry Potter',7,7,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Tournament','Matthew Reilly','Fiction/Action',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Great Zoo of China','Matthew Reilly','Fiction/Action',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'His Dark Materials','Philip Pullman','Fantasy/Young Adult','His Dark Materials',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Alchemyst','Michael Scott','Fantasy/Young Adult','The Secrets of the Immortal Nicholas Flamel',1,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Coraline','Neil Gaiman','Fantasy/Horror',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Barbed Coil','J.V. Jones','Fantasy',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Tales of Taormin','Cheryl J. Franklin','Fantasy','Taormin',3,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Madness of Hallen','Russell Meek','Fantasy','The Khalada Stone',1,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Space Wolf','William King','Warhammer 40,000','Science Fiction',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Sea of Mist','Mel Odom','Fantasy','Might and Magic',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Diamond Throne','David Eddings','Fantasy','The Elenium',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Shining Ones','David Eddings','Fantasy','The Tamuli',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dark Lord of Geeragh','Veronica Sweeney','Fantasy/Young Adult',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Zenith','Dirk Strasser','Fantasy','Books of Ascension',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Chronicles of Narnia','C.S. Lewis','Fantasy/Young Adult','Narnia',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Red Rising','Pierce Brown','Science Fiction','Red Rising',1,7,NULL,NULL);
INSERT INTO books VALUES(NULL,'Armor','John Steakley','Science Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Ready Player One','Ernest Cline','Science Fiction',NULL,1,2,NULL,NULL);
INSERT INTO books VALUES(NULL,'Ender''s Game','Orson Scott Card','Science Fiction','Ender''s Game',1,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Spoiler','Annalena McAfee','Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Wild Things','Dave Eggers','Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Life of Pi','Yann Martel','Fiction/Philosophy',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Perfume','Patrick Süskind','Fiction/Horror/Mystery',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Reader','Bernhard Schlink','Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Parvana','Deborah Ellis','Fiction/Children''s',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Heaven Shop','Deborah Ellis','Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The God of Small Things','Arundhati Roy','Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Messenger','Markus Zusak','Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Lord of the Flies','William Golding','Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'A Clockwork Orange','Anthony Burgess','Science Fiction/Dystopia',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Outsider','Albert Camus','Fiction/Young Adult',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Lost World','Michael Crichton','Science Fiction','Jurassic Park',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Coorinna','Erle Wilson','Fiction/History',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Dalai Lama''s Book of Wisdom','Dalai Lama','Self-help',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Art of War','Sun-tzu','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Absolutely True Diary of a Part-Time Indian','Sherman Alexie','Fiction/Young Adult',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Teacher''s Pet','Morris Gleitzman','Fiction/Children''s',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Big Big Big Book of Tashi','Anna Fienberg/Barbara Fienberg/Kim Gamble','Fiction/Children''s','Tashi',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Don''t Call me Ishmael!','Michael Gerard Bauer','Fiction/Young Adult',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The One Hundred Year Old Mand who Climbed out the Window and Disappeared','Jonas Jonasson','Fiction','Hundred-Year-Old Man',1,2,NULL,NULL);

INSERT INTO books VALUES(NULL,'Paper Towns','John Green','Fiction/Young Adult',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Let it Snow','John Green/Maureen Johnson/Lauren Myracle','Fiction/Young Adult',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'An Abundance of Katherines','John Green','Fiction/Young Adult',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Turtles all the way Down','John Green','Fiction/Young Adult',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Fault in our Stars','John Green','Fiction/Young Adult',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Will Grayson, Will Grayson','John Green','Fiction/Young Adult',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Looking for Alaska','John Green','Fiction/Young Adult',NULL,NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Subtle Art of Not Giving a Fuck','Mark Manson','Self-help','Mark Manson',1,2,NULL,NULL);
INSERT INTO books VALUES(NULL,'Everything is Fucked','Mark Manson','Self-help','Mark Manson',2,2,NULL,NULL);

INSERT INTO books VALUES(NULL,'Dragonology','Dugald Steer','Fantasy/Children''s','Ology',1,15,NULL,NULL);
INSERT INTO books VALUES(NULL,'Egyptology','Dugald Steer','Fantasy/Children''s','Ology',2,15,NULL,NULL);
INSERT INTO books VALUES(NULL,'Wizardology','Dugald Steer','Fantasy/Children''s','Ology',3,15,NULL,NULL);
INSERT INTO books VALUES(NULL,'Pirateology','Dugald Steer','Fantasy/Children''s','Ology',4,15,NULL,NULL);
INSERT INTO books VALUES(NULL,'Monsterology','Dugald Steer','Fantasy/Children''s','Ology',6,15,NULL,NULL);
INSERT INTO books VALUES(NULL,'Vampireology','Dugald Steer','Fantasy/Children''s','Ology',9,15,NULL,NULL);

INSERT INTO books VALUES(NULL,'Wizards and Witches','Brendan Lehane','Fantasy/Mythology/Fable','The Enchanted World',1,21,NULL,NULL);
INSERT INTO books VALUES(NULL,'Aesop''s Fables','Aesop','Fable',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Tales from the Mabinogion','Gwyn Thomas','Fable',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Yertle the Turtle and Other Stories','Dr. Seuss','Fiction/Children''s','Dr. Seuss',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Just so Stories','Rudyard Kipling','Fable/Children''s',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Ghost','Louise Welsh/Others','Fable/Horror',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Complete Grimm''s Fairy Tales','Jacob Grimm/Wilhelm Grimm','Fable/Horror',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Myths and Legends','Hamish Hamilton/Jacynth Hope-Simpson','Mythology/Fable',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Gods and Heroes','Michael Foss','Mythology',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Fairly Wicked Tales','Stacey Turner','Fable/Horror',NULL,NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Bad Beginning','Lemony Snicket','Fiction/Children''s','A Series of Unfortunate Events',1,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Reptile Room','Lemony Snicket','Fiction/Children''s','A Series of Unfortunate Events',2,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Wide Window','Lemony Snicket','Fiction/Children''s','A Series of Unfortunate Events',3,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Miserable Mill','Lemony Snicket','Fiction/Children''s','A Series of Unfortunate Events',4,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Austere Academy','Lemony Snicket','Fiction/Children''s','A Series of Unfortunate Events',5,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Ersatz Elevator','Lemony Snicket','Fiction/Children''s','A Series of Unfortunate Events',6,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Vile Village','Lemony Snicket','Fiction/Children''s','A Series of Unfortunate Events',7,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Hostile Hospital','Lemony Snicket','Fiction/Children''s','A Series of Unfortunate Events',8,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Carnivorous Carnival','Lemony Snicket','Fiction/Children''s','A Series of Unfortunate Events',9,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Slippery Slope','Lemony Snicket','Fiction/Children''s','A Series of Unfortunate Events',10,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Grim Grotto','Lemony Snicket','Fiction/Children''s','A Series of Unfortunate Events',11,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Penultimate Peril','Lemony Snicket','Fiction/Children''s','A Series of Unfortunate Events',12,13,NULL,NULL);
INSERT INTO books VALUES(NULL,'The End','Lemony Snicket','Fiction/Children''s','A Series of Unfortunate Events',13,13,NULL,NULL);

INSERT INTO books VALUES(NULL,'Family Bible','Unknown','Religion',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Mao''s Last Dancer','Li Cunxin','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Is this Anything?','Jerry Seinfeld','Biography',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'From Snow to Ash','Anthony Sharwood','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Kon-Tiki Expedition','Thor Heyerdahl','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Mein Kampf','Adolf Hitler','Biography',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Half a Lifetime','Judith Wright','Biography',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Invictus','John Carlin','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Bravo Two Zero','Andy McNab','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Wild Swans','Jung Chang','Biography',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Balzac and the Little Chinese Seamstress','Dai Sijie','Fiction/Biography',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'A.B. ''Banjo'' Patterson''s Collected Verse','A.B. ''Banjo'' Patterson','Poetry',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Much Ado About Nothing','William Shakespeare/Emma Vieceli','Play',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'A Doll''s House','Henrik Ibsen','Play',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'McCarthy''s Bar','Pete McCarthy','Travel',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Mystery of a Convent and Maria Monk','Maria Monk','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Quest of the Holy Grail','Unknown/P.M. Matarasso','Fiction/Mythology',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Treasure Island and the Black Arrow','Robert Louis Stevenson','Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Beowulf','Unknown/David Wright','Poetry',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Ivanhoe','Sir Walter Scott','Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Robinson Crusoe','Daniel Defoe','Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'King Arthur and the Knights of the Round Table','Antonia Pakenham','Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Such is Life','Tom Collins','Fiction/History',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Alice in Wonderland','Lewis Carrol','Fantasy/Children''s',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Gulliver''s Travels','Jonathon Swift','Fantasy',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Moby Dick','Herman Melville','Fiction/History',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Lost Languages','W. Andrew Robinson','Language',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Dangerous Book for Boys','Hal Iggulden','Self-help','Dangerous Books for Boys',1,2,NULL,NULL);
INSERT INTO books VALUES(NULL,'On Becoming a Man','Harold Shryock','Self-help',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Complete Hoyle Revised','Edmond Hoyle','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'101 Amazing Card Tricks','Bob Longe','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'GO: A Complete Introduction to the Game','Cho Chikun','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Second Book of GO','Richard Bozulich','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'South Australian Recreational Boating Safety Handbook','Government of South Australia','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Construction Handbook','Mojang','Reference','Minecraft',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Redstone Handbook','Mojang','Reference','Minecraft',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Combat Handbook','Mojang','Reference','Minecraft',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Australian Oxford Dictionary','Oxford','Language',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Runic Inscriptions','Paul Johnson','Language',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Little Book of Foreign Swear Words','Sid Dinch','Language',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Holy Bible','Unknown','Religion',NULL,NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'Great Encyclopaedic Dictionary v1','Reader''s Digest','Nonfiction','Great Encyclopaedic Dictionary',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Great Encyclopaedic Dictionary v2','Reader''s Digest','Nonfiction','Great Encyclopaedic Dictionary',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Great Encyclopaedic Dictionary v3','Reader''s Digest','Nonfiction','Great Encyclopaedic Dictionary',3,3,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Pathfinder','James Fenimore Cooper','Fiction/History',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Raven','Peter Landesman','Fiction/History',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'All Quiet on the Westernfront','Erich Maria Remarque','Fiction/History',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Private Peaceful','Michael Morpurgo','Fiction/History',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Fire Down Below','William Golding','Fiction/History',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Destroy Carthage','David Gibbins','Fiction/History','Total War: Rome',1,2,NULL,NULL);
INSERT INTO books VALUES(NULL,'Relics','Pip Caughan-Hughes','Fiction/History','Brother Petroc',1,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Queen of Swords','Sara Donati','Fiction/History','Wilderness',5,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Song of the Gladiator','Paul Doherty','Fiction/History','Ancient Rome',3,5,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Feynman Lectures on Physics v1','Richard Feynman','Science','The Feynman Lectures on Physics',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Feynman Lectures on Physics v2','Richard Feynman','Science','The Feynman Lectures on Physics',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Feynman Lectures on Physics v3','Richard Feynman','Science','The Feynman Lectures on Physics',3,3,NULL,NULL);

INSERT INTO books VALUES(NULL,'Mathematical Insights','Dippy C. Olijnyk','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Giancoli 6th Edition','Pearson','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Calculus with Analytic Geometry 3rd Edition','Leithold','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Nuclear Physics and Introduction','Burcham','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Nature of Matter','Ginestra Amaldi','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'50 Physics Ideas','Joanne Baker','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Feynman''s Tips on Physics','Richard Feynman','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Selections from the Principle of Relativity','Einstein/Hawking','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Fractals','Hand Lauwerier','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'QED','Richard Feynman','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Particles and Accelerators','Gouiran','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Chaos','James Gleich','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Astronomy 2nd Edition','Ebbighausen/Merrill','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Elements of Probability Theory','Cramer','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Elementary Linear Algebra 2nd Edition','Anton','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'All the Best from the Australian Mathematics Competition','Unknown','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Methods of Logic','Quine','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Symbolic Logic','Copi','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Labyrinths of Reason','William Poundstone','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'God Created the Integers','Stephen Hawking','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Lady of the Tiger?','Raymond Smullyan','Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Pitman''s Shorthand Instructor','Pitman','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Lateral Thinking Puzzles','Main Street','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Max n''aime pas lire','Ainsi Va La Vie','Language',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Mind-Boggling Tricky Logic Puzzles','Unknown','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'I.Q. Puzzles','Unknown','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Book of Total Genius','Mensa','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Learning to Rock Climb','Loughman','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Greece and Rome at War','Connollo','History',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Soldiering On','Australian War Memorial','History',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'A History of Antarctica','Stephen Martin','History',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Damn the Dardanelles','John Laffin','History',NULL,NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'This England v1','I. Tenen','History','This England',1,2,NULL,NULL);
INSERT INTO books VALUES(NULL,'This England v2','I. Tenen','History','This England',2,2,NULL,NULL);

INSERT INTO books VALUES(NULL,'The Gathering Storm','Winston S. Churchill','History','The Second World War',1,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'Their Finest Hour','Winston S. Churchill','History','The Second World War',2,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Grand Alliance','Winston S. Churchill','History','The Second World War',3,6,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Hinge of Fate','Winston S. Churchill','History','The Second World War',4,6,NULL,NULL);

INSERT INTO books VALUES(NULL,'A Dictionary of Chivalry','Longmans','Language',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'4 Ingredients 2','Kim McCosker/Rachael Bermingham','Cooking',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Legions of Middle-Earth','Games Workshop','Reference',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Guinness World Records 2010 Gamer''s','Guinness World Records','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Pokemon FireRed & LeafGreen Guide','Unknown','Reference',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Swimming & Lifesaving','Royal Life Saving','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Gemstones of the Southern Continents','Sutherland','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Amazing Planet Earth','Farndon/Challoner/Kerror/Walshaw','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Atlas 5th Edition','Heinemann','Science',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Rock Climbing Guide to Southern Grampians','V.C.C','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Moonarie','CCSA/Tony Barker','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Rockclimbs around Adelaide','AUMC/Nyrie Dodd','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'A Rock Climber''s Guide to the Flinders Rangers','Nick Neagle','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Kaputar','Mark Colyvan','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'A Manual of Modern Rope Techniques','Nigel Shepherd','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Modern Alpine Climbing','Pit Schubert','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Modern Rope Techniques','Bill March','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Advanced Rockcraft','Royal Robbins','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Abseiling Handbook','NZ Mountain Safety Council','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Basic Essentials of Rock Climbing','Mike Strassman','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'How to Rock Climb!','John Long','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'How to Gym Climb','John Long','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Rock Climbing','John Barry/Nigel Shepherd','Sport',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Submarine Design & Engineering','BMT','Technology',NULL,NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'Art & Arcana','Michael Witwer/Kyle Newman/Sam Witwer','Art','Dungeons & Dragons',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Chronicles of Exandria: The Tale of Vox Machina','Critical Role','Art','The Chronicles of Exandria',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dungeon Masters Guide (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Xanathar''s Guide to Everything (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Tasha''s Cauldron of Everything (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Player''s Handbook (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Monster Manual (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Volo''s Guide to Monsters (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Mordenkainen''s Tome of Foes (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Guildmasters'' Gude to Ravnica (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Baldur''s Gate: Descent into Avernus (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Sword Coast Adventurer''s Guide (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Ghosts of Saltmarsh (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Curse of Strahd (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Tales from the Yawning Portal (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Icewind Dale: Rime of the Frostmaiden (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Van Richten''s Guide to Ravenloft (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Ultimate Bestiary: The Dreaded Accursed (5E)','Nord Games','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Tome of Beasts II (5E)','Kobold Press','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Strongholds & Followers (5E)','MCDM','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Adventures in Middle-Earth: Players Guide (5E)','Cubicle 7','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Adventures in Middle-Earth: Loremaster''s Guide (5E)','Cubicle 7','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Out of the Box Encounters (5E)','Nerdarchy','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Menagerie of Magic (5E)','Greedy Mimic Games','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Worlds and Monsters (4E)','Wizards of the Coast','Reference','Dungeons & Dragons/4E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Player''s Handbook Races: Tieflings (4E)','Wizards of the Coast','Reference','Dungeons & Dragons/4E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Assault on Nightwyrm Fortress (4E)','Wizards of the Coast','Reference','Dungeons & Dragons/4E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Kingdom of the Ghouls (4E)','Wizards of the Coast','Reference','Dungeons & Dragons/4E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Book fo Vile Darkness (4E)','Wizards of the Coast','Reference','Dungeons & Dragons/4E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Eberron Campaign Guide (4E)','Wizards of the Coast','Reference','Dungeons & Dragons/4E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Neverwinter Campaign Setting (4E)','Wizards of the Coast','Reference','Dungeons & Dragons/4E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Revenge of the Giants (4E)','Wizards of the Coast','Reference','Dungeons & Dragons/4E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Plane Below: Secrets of the Elemental Chaos (4E)','Wizards of the Coast','Reference','Dungeons & Dragons/4E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Tomb of Horrors (4E)','Wizards of the Coast','Reference','Dungeons & Dragons/4E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Monster Manual (3.5E)','Wizards of the Coast','Reference','Dungeons & Dragons/3.5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Player''s Handbook (3.5E)','Wizards of the Coast','Reference','Dungeons & Dragons/3.5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dungeon Masters Guide (3.5E)','Wizards of the Coast','Reference','Dungeons & Dragons/3.5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Complete Adventurer (3.5E)','Wizards of the Coast','Reference','Dungeons & Dragons/3.5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Complete Warrior (3.5E)','Wizards of the Coast','Reference','Dungeons & Dragons/3.5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Monster Manual (3E)','Wizards of the Coast','Reference','Dungeons & Dragons/3E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dungeon Master''s Guide (3E)','Wizards of the Coast','Reference','Dungeons & Dragons/3E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Forgotten Realms Campaign Setting (3E)','Wizards of the Coast','Reference','Dungeons & Dragons/3E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dungeon Master''s Guide (2E)','Wizards of the Coast','Reference','Dungeons & Dragons/2E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Monster Manual (1.5E)','Wizards of the Coast','Reference','Dungeons & Dragons/1.5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Monster Manual II (1.5E)','Wizards of the Coast','Reference','Dungeons & Dragons/1.5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Forgotten Realms: Dreams of the Red Wizards (1.5E)','Wizards of the Coast','Reference','Dungeons & Dragons/1.5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Forgotten Realms: Cyclopedia of the Realms (1.5E)','Wizards of the Coast','Reference','Dungeons & Dragons/1.5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Forgotten Realms: DM''s Sourcebook of the Realms (1.5E)','Wizards of the Coast','Reference','Dungeons & Dragons/1.5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Basic Rules Set 1 (1E)','Wizards of the Coast','Reference','Dungeons & Dragons/1E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Night Below: An Underrk Campaign (1E)','Wizards of the Coast','Reference','Dungeons & Dragons/1E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Advanced Player''s Guide (P1)','Paizo','Reference','Pathfinder/1E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Bestiary (P1)','Paizo','Reference','Pathfinder/1E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Core Rulebook (P1)','Paizo','Reference','Pathfinder/1E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Numenera','Monte Cook Games','Reference',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Monsters Know What They''re Doing','Keith Ammann','Reference','Dungeons & Dragons',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Live to Tell the Tale','Keith Ammann','Reference','Dungeons & Dragons',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Game Angry: How to RPG the Angry Way','Scott Rehm','Reference','Dungeons & Dragons',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Fizban''s Treasury of Dragons (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Candlekeep Mysteries (5E)','Wizards of the Coast','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Wanderer''s Guide to Merchants & Magic (5E)','Eventyr Games','Reference','Dungeons & Dragons/5E',NULL,NULL,NULL,NULL);

INSERT INTO books VALUES(NULL,'Vietnamese Cooking','Periplus Editions','Cooking',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Rought Guide to South America on a Budget','Rough Guides','Travel','Rough Guides',NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Till we have Faces','C.S. Lewis','Fiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Seventh Tower Volumes 1-3','Garth Nix','FantasyYoung Adult','The Seventh Tower',1,2,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Seventh Tower Volumes 4-6','Garth Nix','FantasyYoung Adult','The Seventh Tower',2,2,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Golden Door','Emily Rodda','Fantasy/Young Adult','Three Doors',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Silver Door','Emily Rodda','Fantasy/Young Adult','Three Doors',2,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Third Door','Emily Rodda','Fantasy/Young Adult','Three Doors',3,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Tolkien and the Great War','John Garth','Biography',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Calligraphy Techniques','Diana Hardy Wilson','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Darkwalker on Moonshae','Douglas Niles','Fantasy','Forgotten Realms/The Moonshae',1,3,NULL,NULL);
INSERT INTO books VALUES(NULL,'Warrior of the Altaii','Robert Jordan','Fantasy',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dinkum Dunnies','Douglass Baglin/Barbara Mullins','Nonfiction',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'12 Rules for Life','Jordan B. Peterson','Self-help',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'Atomic Habits','James Clear','Self-help',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Barefoot Investor','Scott Pape','Self-help',NULL,NULL,NULL,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Dragon Keeper','Robin Hobb','Fantasy','The Rain Wild Chronicles',1,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'Dragon Haven','Robin Hobb','Fantasy','The Rain Wild Chronicles',2,4,NULL,NULL);
INSERT INTO books VALUES(NULL,'The Measure of the Magic','Terry Brooks','Fantasy','Legends of Shannara',2,2,NULL,NULL);
