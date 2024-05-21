# create profile page
# src/pages/Profile.js

import React from 'react';
import Controls from '../components/controls/Controls';
import Form from '../components/Form';
import PaperForm from '../components/PaperForm';
import PageTitle from '../components/PageTitle';

export default function Profile(props) {
  const sectors = [
    { name: 'Technology' },
    { name: 'Engineering' },
    { name: 'Health' },
  ];

  return (
    <>
      <PageTitle title='Profile' />

      <PaperForm>
        <Form>
          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Desired job title" />
            <Controls.TextFieldCustom placeholder="Desired job title" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Min per annum salary" />
            <Controls.TextFieldCustom placeholder="Min per annum salary" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Job type" />
            <Controls.CheckboxCustom value='Permanent' />
            <Controls.CheckboxCustom value='Temporary' />
            <Controls.CheckboxCustom value='Conract' />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Sector" />
            <Controls.SelectCustom items={sectors} />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Experience" />
            <Controls.TextareaCustom placeholder="Experience" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.ButtonCustom text="Submit" />
          </Controls.FormGroupCustom>
        </Form>
      </PaperForm>
    </>
  )
}

# ==============================================================

# create PaperForm component

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '500px',
    backgroundColor: theme.palette.common.light,
    margin: '0 auto',
    marginTop: '20px',
    padding: '25px',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.common.delta,
    },
    '& .MuiFormGroup-root': {
      marginBottom: '20px',
      '&:last-child': {
        marginBottom: '0px'
      }
    },
    '& .Footer': {
      fontSize: '13px',
      textAlign: 'center',
      margin: '0'
    },
  }
}))

export default function PaperForm(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

# ==============================================================

# checkbox custom control
# src/components/controls/CheckboxCustom.js

import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '33px'
  },
}))

export default function CheckboxCustom(props) {
  const classes = useStyles();
  const { value } = props;

  return (
    <FormControlLabel
      value={value}
      control={<Checkbox color="primary" />}
      label={value}
      labelPlacement="end"
      classes={{ root: classes.root }}
    />
  )
}

# ==============================================================


# update controls
# src/components/controls/Controls.js

import CheckboxCustom from './CheckboxCustom';

const Controls = {
  ...
  CheckboxCustom,
}

export default Controls;


# ==============================================================

# select custom control
# src/components/controls/SelectCustom.js

import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.light,
  },
}))

export default function SelectCustom(props) {
  const { items } = props;

  const classes = useStyles();

  const [value, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl variant="outlined" className={classes.root}>
      <Select
        labelId="selctor-label"
        id="sector-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={value}
        onChange={handleChange}
      >
        {
          items.map(item => (
            <MenuItem value={item.name}>{item.name}</MenuItem>
          ))
        }
      </Select>
    </FormControl >
  )
}

# ==============================================================

# update controls
# src/components/controls/Controls.js

import SelectCustom from './SelectCustom';

const Controls = {
  ...
  SelectCustom,
}

export default Controls;


# ==============================================================

# textarea custom control
# src/components/controls/TextareaCustom.js

import React from 'react';
import { TextareaAutosize } from '@material-ui/core';

export default function TextareaCustom(props) {

  const { placeholder, rows } = props;
  return (
    <TextareaAutosize
      rows={rows || 7}
      placeholder={placeholder}
    />
  )
}

# ==============================================================

# update controls
# src/components/controls/Controls.js

import TextareaCustom from './TextareaCustom';

const Controls = {
  ...
  TextareaCustom,
}

export default Controls;

# ==============================================================
