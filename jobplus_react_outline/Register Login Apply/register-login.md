# create login page
# src/pages/Login.js

import React from 'react'
import Form from '../components/Form';
import Controls from '../components/controls/Controls';
import PaperForm from '../components/PaperForm';
import PageTitle from '../components/PageTitle';
import { Link } from "react-router-dom";

export default function Login(props) {

  return (
    <>
      <PageTitle title='Login' />
      <PaperForm>
        <Form>
          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Email" />
            <Controls.TextFieldCustom placeholder="Email" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Password" />
            <Controls.TextFieldCustom type="password" placeholder="Password" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.ButtonCustom text="Login" />
          </Controls.FormGroupCustom>
        </Form>
        <p className={'Footer'}>Don't have an account? <Link to="/register">Register</Link></p>
      </PaperForm>
    </>
  )
}


# ==============================================================

# update PaperForm component

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    ...
    '& .Footer': {
      fontSize: '13px',
      textAlign: 'center',
      margin: '0'
    },
  }
}))

# ==============================================================

import React from 'react'
import Form from '../components/Form';
import Controls from '../components/controls/Controls';
import PaperForm from '../components/PaperForm';
import PageTitle from '../components/PageTitle';
import { Link } from "react-router-dom";

export default function Register(props) {

  return (
    <>
      <PageTitle title='Register' />
      <PaperForm>
        <Form>
          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="First name" />
            <Controls.TextFieldCustom placeholder="First name" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Last name" />
            <Controls.TextFieldCustom placeholder="Last name" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Email" />
            <Controls.TextFieldCustom type="email" placeholder="Email" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Choose Password" />
            <Controls.TextFieldCustom type="password" placeholder="Choose Password" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Confirm Password" />
            <Controls.TextFieldCustom type="password" placeholder="Confirm Password" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.ButtonCustom text="Register" />
          </Controls.FormGroupCustom>
        </Form>
        <p className={'Footer'}>Already have an account? <Link to="/login">Login</Link></p>
      </PaperForm>
    </>
  )
}


# ==============================================================

# create register page
# src/pages/Register.js

import React from 'react'
import Form from '../components/Form'
import PageTitle from '../components/PageTitle'
import PaperForm from '../components/PaperForm'
import Controls from '../components/controls/Controls';
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <PageTitle title='Register' />
      <PaperForm>
        <Form>
          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="First name" />
            <Controls.TextFieldCustom placeholder="First name" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Last name" />
            <Controls.TextFieldCustom placeholder="Last name" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Email" />
            <Controls.TextFieldCustom type="email" placeholder="Email" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Choose Password" />
            <Controls.TextFieldCustom type="password" placeholder="Choose Password" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Confirm Password" />
            <Controls.TextFieldCustom type="password" placeholder="Confirm Password" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.ButtonCustom text="Register" />
          </Controls.FormGroupCustom>
        </Form>
        <p className={'Footer'}>Already have an account? <Link to="/login">Login</Link></p>
      </PaperForm>
    </>
  )
}


# ==============================================================

# create listing details page
# src/pages/ListingDetails.js

# ==============================================================

import React from 'react'
import Hero from '../components/Hero';
import ListingFilter from '../components/ListingFilter';
import Listing from '../components/Listing';

export default function ListingDetails() {
  const listings = [<Listing detailed={true} />]

  return (
    <>
      <Hero heroType='plain' />
      <ListingFilter components={listings} />
    </>
  )
}
