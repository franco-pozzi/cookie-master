
import { ChangeEvent, FC, useState } from "react"

import axios from 'axios'

import Cookies from 'js-cookie'

import { Layout } from "../components/layouts"

import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"

interface Props {
  theme: string;
}

const ThemeChangerPage: FC<Props> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState('light')

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(event.target.value)

    Cookies.set('theme', event.target.value)
  }

  const onClick = async () => {
    const { data } = await axios.get('/api/hello')
  }

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>
              Theme
            </FormLabel>
            <RadioGroup
              value={currentTheme}
              onChange={onThemeChange}
            >
              <FormControlLabel value='light' control={<Radio />} label='Light' />
              <FormControlLabel value='dark' control={<Radio />} label='Dark' />
              <FormControlLabel value='custom' control={<Radio />} label='Custom' />
            </RadioGroup>
          </FormControl>

          <Button onClick={onClick}>
            Solicitud
          </Button>
        </CardContent>
      </Card>
    </Layout>
  )
}

export default ThemeChangerPage