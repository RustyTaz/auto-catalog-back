CREATE TABLE Guest_info (
	"id" serial NOT NULL PRIMARY KEY,
	"name" varchar(255) NOT NULL,
	"surname" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL
);



CREATE TABLE Car (
	"id" serial NOT NULL PRIMARY KEY,
	"model" varchar(255) NOT NULL,
	"brand_id" serial NOT NULL,
	"horse_power" int NOT NULL,
	"max_speed" int NOT NULL,
	"acceleration" real NOT NULL,
	"awd" BOOLEAN NOT NULL,
	FOREIGN KEY ("brand_id") REFERENCES Brand ("id")
);



CREATE TABLE Brand (
	"id" serial NOT NULL PRIMARY KEY,
	"name" varchar(255) NOT NULL
);


--FOREIGN KEY ("id") REFERENCES Car ("id")










