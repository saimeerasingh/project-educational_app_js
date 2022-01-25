import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FunFactButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined">Fun Fact</Button>
    </Stack>
  );
}