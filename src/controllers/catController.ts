import { Request, Response } from "express";
import { getBreeds, getBreedById, searchBreeds, getImagesByBreedId } from "../services/catService";

export const getAllBreeds = async (req: Request, res: Response) => {
  try {
    const breeds = await getBreeds();
    res.status(200).json(breeds);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cat breeds" });
  }
};

export const getAllNames = async (req: Request, res: Response) => {
  try {
    const breeds = await getBreeds();
    const simplifiedBreeds = breeds.map((breed: any) => ({
      id: breed.id,
      name: breed.name
    }));
    res.status(200).json(simplifiedBreeds);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cat breeds" });
  }
};

export const getBreed = async (req: Request, res: Response) => {
  try {
    const breed_id = req.params.id;
    const breed = await getBreedById(breed_id);
    res.status(200).json(breed);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cat breed by id" });
  }
};

export const getImagesByBreed = async (req: Request, res: Response) => {
  try {
    const breed_id = req.params.id;
    if (!breed_id || typeof breed_id !== "string") {
      return res.status(400).json({ error: "Query parameter 'breed_id' is required" });
    }
    const images = await getImagesByBreedId(breed_id);
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: "Error fetching images by breed id" });
  }
};

export const searchCatBreeds = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    if (!q || typeof q !== "string") {
      return res.status(400).json({ error: "Query parameter 'q' is required" });
    }
    const result = await searchBreeds(q);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error searching cat breeds" });
  }
};
