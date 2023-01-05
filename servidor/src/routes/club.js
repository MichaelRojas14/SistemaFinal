const{ Router } = require('express');
const router = Router();

const { getClub, getClubById, crearClub, deleteClub, updateClub } = require('../controllers/club.controller')

//CLUB
router.get('/club', getClub );
router.get('/club/:id_club', getClubById);
router.post('/club', crearClub);
router.put('/club/:id_club', updateClub);
router.delete('/club/:id_club', deleteClub);


module.exports = router;