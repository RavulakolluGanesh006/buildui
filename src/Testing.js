// AddAspectImpactWorkout.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Chip,
  OutlinedInput,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';

const users = ['John Doe', 'Daniel James', 'Emily Smith', 'Michael Brown'];
const plants = ['Plant A', 'Plant B'];
const BUs = ['BU1', 'BU2'];
const subFunctions = ['Sub 1', 'Sub 2'];

export default function Testing() {
  const [formData, setFormData] = useState({
    plant: '',
    bu: '',
    subFunction: '',
    aiNumber: '',
    docRefNum: '',
    reviewedOn: null,
    executedBy: [],
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form Submitted:', formData);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h5" gutterBottom>
          Add Aspect Impact Workout
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Plant</InputLabel>
            <Select
              value={formData.plant}
              onChange={e => handleChange('plant', e.target.value)}
              label="Plant"
            >
              {plants.map(p => (
                <MenuItem key={p} value={p}>{p}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>BU</InputLabel>
            <Select
              value={formData.bu}
              onChange={e => handleChange('bu', e.target.value)}
              label="BU"
            >
              {BUs.map(bu => (
                <MenuItem key={bu} value={bu}>{bu}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Sub Function</InputLabel>
            <Select
              value={formData.subFunction}
              onChange={e => handleChange('subFunction', e.target.value)}
              label="Sub Function"
            >
              {subFunctions.map(sf => (
                <MenuItem key={sf} value={sf}>{sf}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="A/I Number"
            placeholder="Country/Plant/BU/A/xxxxx"
            value={formData.aiNumber}
            onChange={e => handleChange('aiNumber', e.target.value)}
          />
        </Box>

        <TextField
          fullWidth
          label="Document Reference Number"
          value={formData.docRefNum}
          onChange={e => handleChange('docRefNum', e.target.value)}
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <DatePicker
            label="Reviewed On"
            value={formData.reviewedOn}
            onChange={value => handleChange('reviewedOn', value)}
            slotProps={{ textField: { fullWidth: true } }}
          />

          <FormControl fullWidth>
            <InputLabel>A/I Executed By</InputLabel>
            <Select
              multiple
              value={formData.executedBy}
              onChange={e => handleChange('executedBy', e.target.value)}
              input={<OutlinedInput label="A/I Executed By" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {users.map(user => (
                <MenuItem key={user} value={user}>
                  {user}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box textAlign="right">
          <Button variant="contained" onClick={handleSubmit}>
            Next
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}

