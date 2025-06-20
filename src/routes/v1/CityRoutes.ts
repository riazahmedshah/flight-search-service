import express from "express"
import {createCity,deleteCity,getAllCities,getCity, updateCity} from "../../controllers/exports"

export const v1Cityroutes = express.Router();

v1Cityroutes.post("/city", createCity);
v1Cityroutes.get("/city/:id", getCity);
v1Cityroutes.patch("/city/:id", updateCity);
v1Cityroutes.delete("/city/:id", deleteCity);
v1Cityroutes.get("/allCities", getAllCities)