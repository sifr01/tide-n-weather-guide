CREATE TYPE "public"."meta_source" AS ENUM('tides', 'weather', 'solar');--> statement-breakpoint
CREATE TYPE "public"."tide_type" AS ENUM('high', 'low');--> statement-breakpoint
CREATE TABLE "metadata" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "metadata_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"source" "meta_source" NOT NULL,
	"cost" numeric(10, 4),
	"request_start" varchar(50),
	"daily_quota" numeric(10, 0),
	"datum" varchar(50),
	"request_end" varchar(50),
	"offset" numeric(5, 0),
	"request_count" numeric(10, 0),
	"station_lat" numeric(9, 6),
	"station_lon" numeric(9, 6),
	"station_name" varchar(255),
	"station_source" varchar(100),
	"parameters" text
);
--> statement-breakpoint
CREATE TABLE "tides" (
	"time" bigint PRIMARY KEY NOT NULL,
	"height" numeric(7, 4) NOT NULL,
	"type" "tide_type" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "weather" (
	"time" bigint PRIMARY KEY NOT NULL,
	"gust_ecmwf" real,
	"gust_noaa" real,
	"gust_sg" real,
	"pressure_ecmwf" real,
	"pressure_ecmwf_aifs" real,
	"pressure_noaa" real,
	"pressure_sg" real,
	"water_temp_meto" real,
	"water_temp_noaa" real,
	"water_temp_sg" real,
	"wave_height_dwd" real,
	"wave_height_ecmwf" real,
	"wave_height_meteo" real,
	"wave_height_noaa" real,
	"wave_height_sg" real,
	"wind_dir_dwd" real,
	"wind_dir_ecmwf" real,
	"wind_dir_ecmwf_aifs" real,
	"wind_dir_noaa" real,
	"wind_dir_sg" real,
	"wind_speed_dwd" real,
	"wind_speed_ecmwf" real,
	"wind_speed_ecmwf_aifs" real,
	"wind_speed_noaa" real,
	"wind_speed_sg" real,
	"uv_index_noaa" real,
	"uv_index_sg" real
);
