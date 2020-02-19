import express from 'express';

const routes = express.Router();

routes.post('/certifications', (req, res) => {
    //chamar micro-serviços
    return res.send({ ok: true })
})

export default routes;