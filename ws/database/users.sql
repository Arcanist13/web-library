CREATE TABLE users (
	id INTEGER PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  hashed_password TEXT NOT NULL,
  admin INTEGER NOT NULL,
  created INTEGER NOT NULL,
  email TEXT NOT NULL,
  activity INTEGER
);

INSERT INTO users VALUES(1,'gavin','$2b$12$h.CORsjzwhQ3bOSJzHJS9eI2CHiuPWfKz4aMugtSyvA8OB59du0uK',1,1639571717,'gmeredith15855@gmail.com',1639571717);
