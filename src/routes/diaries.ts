import express from 'express'
import * as diaryServices from '../services/diaries.services'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  res.send(diary?.weather)
})

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body

  const newDiaryEntry = diaryServices.addDiary({
    date,
    weather,
    visibility,
    comment
  })

  res.json(newDiaryEntry)
})

export default router
