# create controls
# src/components/controls/ButtonCustom.js

import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '16px',
    backgroundColor: theme.palette.common.contrast,
    color: theme.palette.common.light,
    padding: '13px 20px',
    borderRadius: 0,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.common.contrast,
    }
  }
}))

export default function ButtonCustom(props) {
  const { text = 'Submit', ...other } = props;
  const classes = useStyles();

  return (
    <Button
      classes={{ root: classes.root }}
      {...other}>
      {text}
    </Button>
  )
}

# add controls.js
import ButtonCustom from './ButtonCustom';

const Controls = {
  ButtonCustom,
}

export default Controls;

# update Hero component to include button

import Controls from './controls/Controls'

export default function Hero(props) {
  return (
    <>
      <Controls.ButtonCustom text="Search" />
    </>
  )
}


# =====================================================


# src/components/controls/FormGroupCustom.js


import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { FormGroup } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '16px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '10px',
    },
  }
}))

export default function FormGroupCustom(props) {
  const classes = useStyles();
  const { children, ...other } = props;

  return (
    <FormGroup className={classes.root} {...other}>
      {children}
    </FormGroup>
  )
}


# =====================================================


# src/components/controls/InputLabelCustom.js

import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { InputLabel } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '5px',
    ...theme.fonts.bold,
  },
  primary: {
    color: theme.palette.common.alpha,
  },
  secondary: {
    color: theme.palette.common.light,
  },
  default: {
    color: theme.palette.common.alpha,
  }
}))

export default function InputLabelCustom(props) {
  const classes = useStyles();
  const { label, color } = props;

  return (
    <div>
      <InputLabel className={clsx({
        [classes.root]: true, //always applies
        [classes.primary]: color === 'primary',
        [classes.secondary]: color === 'secondary',
        [classes.default]: color === undefined,
      })}>{label}</InputLabel>
    </div>
  )
}


# src/components/controls/TextFieldCustom.js

import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  input: {
    backgroundColor: theme.palette.common.light,
    border: `1px solid ${theme.palette.common.delta}`,
  }
}))

export default function TextFieldCustom(props) {
  const { id, color, size, placeholder, variant, ...other } = props;
  const classes = useStyles();

  return (
    <TextField
      id={id || "filled-basic"}
      color={color || "primary"}
      size={size || "small"}
      label={placeholder}
      variant={variant || "filled"}
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  )
}

# src/components/Form.js

import React from 'react'

export default function Form(props) {
  const { children, ...other } = props;

  return (
    <form noValidate autoComplete="off" {...other}>
      {children}
    </form>
  )
}