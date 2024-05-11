import express from 'express';

import {filteredByAny} from "../controllers/filteredByAny.js";
import {filteredByCountry} from "../controllers/filteredByCountry.js";
import {filteredByIntensity} from "../controllers/filteredByIntensity.js";
import {filteredByLikelihood} from "../controllers/filteredByLikelihood.js";
import {filteredByPestle} from "../controllers/filteredByPestle.js";
import {filteredByRegion} from "../controllers/filteredByRegion.js";
import {filteredBySector} from "../controllers/filteredBySector.js";
import {filteredBySource} from "../controllers/filteredBySource.js";
import {filteredByTitle} from "../controllers/filteredByTitle.js";
import {filteredByTopic} from "../controllers/filteredByTopic.js";
import {filteredByYear} from "../controllers/filteredByYear.js";
import {getAllData} from "../controllers/getAllData.js";

const router = express.Router();

router.get('/all', getAllData);

router.get("/year/:year", filteredByYear)

router.get("/topic/:topic", filteredByTopic)

router.get("/title/:title", filteredByTitle)

router.get("/sector/:sector", filteredBySector)

router.get("/region/:region", filteredByRegion)

router.get("/country/:country", filteredByCountry)

router.get("/pestle/:pestle", filteredByPestle)

router.get("/source/:source", filteredBySource)

router.get("/intensity/:intensity", filteredByIntensity)

router.get("/likelihood/:likelihood", filteredByLikelihood)

router.get("/any/:search", filteredByAny)

export default router;