import React from 'react'
import { Input } from '@material-ui/core'
import { Button } from '@material-ui/core'

export default function SignIn({email,setEmail,password,setPasssword, signup}) {
    return (
        <form className="app__signup" >

          <center>
            <img className="app__headerImage"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
             alt="" />
              </center>
              <Input
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPasssword(e.target.value)}

              />
             <Button type="submit" onClick={signup}>Sign Up</Button>
              </form>
    )
}
