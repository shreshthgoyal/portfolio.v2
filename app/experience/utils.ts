import fs from 'fs'
import path from 'path'

export type Experience = {
  company: string
  position: string
  duration: string
  location: string
  description: string
}

export function getExperiences(): Experience[] {
  const configPath = path.join(process.cwd(), 'app', 'experience', 'config.json')
  const fileContent = fs.readFileSync(configPath, 'utf8')
  const config = JSON.parse(fileContent)
  return config.experiences
}
