CREATE TYPE "public"."meta_source" AS ENUM('tides', 'weather', 'solar');--> statement-breakpoint
CREATE TYPE "public"."tide_type" AS ENUM('high', 'low');--> statement-breakpoint
CREATE TABLE "metadata" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "metadata_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"source" "meta_source" NOT NULL,
	"fetched_at" bigint NOT NULL,
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
CREATE TABLE "solar" (
	"time" bigint PRIMARY KEY NOT NULL,
	"uv_index_noaa" numeric(4, 2),
	"uv_index_sg" numeric(4, 2)
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
	"wind_speed_sg" numeric(5, 2)
);
--> statement-breakpoint
CREATE VIEW "public"."weather_solar" AS (select "weather"."time", "weather"."gust_ecmwf", "weather"."gust_noaa", "weather"."gust_sg", "weather"."pressure_ecmwf", "weather"."pressure_ecmwf_aifs", "weather"."pressure_noaa", "weather"."pressure_sg", "weather"."water_temp_meto", "weather"."water_temp_noaa", "weather"."water_temp_sg", "weather"."wave_height_dwd", "weather"."wave_height_ecmwf", "weather"."wave_height_meteo", "weather"."wave_height_noaa", "weather"."wave_height_sg", "weather"."wind_dir_dwd", "weather"."wind_dir_ecmwf", "weather"."wind_dir_ecmwf_aifs", "weather"."wind_dir_noaa", "weather"."wind_dir_sg", "weather"."wind_speed_dwd", "weather"."wind_speed_ecmwf", "weather"."wind_speed_ecmwf_aifs", "weather"."wind_speed_noaa", "weather"."wind_speed_sg", "solar"."uv_index_noaa", "solar"."uv_index_sg" from "weather" left join "solar" on "solar"."time" = "weather"."time");