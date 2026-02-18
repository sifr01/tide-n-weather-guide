CREATE TYPE "public"."meta_source" AS ENUM('tides', 'weather', 'solar');--> statement-breakpoint
CREATE TYPE "public"."tide_type" AS ENUM('high', 'low');--> statement-breakpoint
CREATE TABLE "metadata" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "metadata_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"source" "meta_source" NOT NULL,
	"cost" numeric(2, 0),
	"request_start" bigint,
	"daily_quota" numeric(5, 0),
	"datum" varchar(50),
	"request_end" bigint,
	"offset" numeric(5, 0),
	"request_count" numeric(5, 0),
	"station_lat" numeric(6, 3),
	"station_lon" numeric(6, 3),
	"station_name" varchar(255),
	"station_source" varchar(100),
	"parameters" text
);
--> statement-breakpoint
CREATE TABLE "tides" (
	"time" bigint PRIMARY KEY NOT NULL,
	"height" numeric(18, 15) NOT NULL,
	"type" "tide_type" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "weather" (
	"time" bigint PRIMARY KEY NOT NULL,
	"gust_ecmwf" numeric(5, 2),
	"gust_noaa" numeric(5, 2),
	"gust_sg" numeric(5, 2),
	"pressure_ecmwf" numeric(6, 2),
	"pressure_ecmwf_aifs" numeric(6, 2),
	"pressure_noaa" numeric(6, 2),
	"pressure_sg" numeric(6, 2),
	"water_temp_meto" numeric(5, 2),
	"water_temp_noaa" numeric(5, 2),
	"water_temp_sg" numeric(5, 2),
	"wave_height_dwd" numeric(5, 2),
	"wave_height_ecmwf" numeric(5, 2),
	"wave_height_meteo" numeric(5, 2),
	"wave_height_noaa" numeric(5, 2),
	"wave_height_sg" numeric(5, 2),
	"wind_dir_dwd" numeric(5, 2),
	"wind_dir_ecmwf" numeric(5, 2),
	"wind_dir_ecmwf_aifs" numeric(5, 2),
	"wind_dir_noaa" numeric(5, 2),
	"wind_dir_sg" numeric(5, 2),
	"wind_speed_dwd" numeric(5, 2),
	"wind_speed_ecmwf" numeric(5, 2),
	"wind_speed_ecmwf_aifs" numeric(5, 2),
	"wind_speed_noaa" numeric(5, 2),
	"wind_speed_sg" numeric(5, 2),
	"uv_index_noaa" numeric(4, 2),
	"uv_index_sg" numeric(4, 2)
);
