import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Fade from '@mui/material/Fade';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import CodeRounded from '@mui/icons-material/CodeRounded';
import ScheduleRounded from '@mui/icons-material/ScheduleRounded';

export default function TaskCard() {
  return (
    <Fade in timeout={700}>
      <Card
        data-mui-color-scheme="dark"
        sx={(theme) => ({
          minWidth: 280,
          maxWidth: 360,
          minHeight: 280,
          display: 'flex',
          flexDirection: 'column',
          p: 3,
          background: `linear-gradient(to right bottom, ${
            (theme.vars || theme).palette.primary[500]
          }, ${(theme.vars || theme).palette.primary[600]} 120%)`,
          boxShadow: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
        })}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
          <ScheduleRounded fontSize="inherit" />
          <Typography variant="caption" fontWeight="semiBold">
            March 25th
          </Typography>
        </Box>
        <Box sx={{ my: 'auto' }}>
          <CodeRounded color="white" />
          <Typography fontSize={18} component="div" fontWeight="semiBold" sx={{ lineHeight: 1.4 }}>
            Customize every button and chip instance primary color
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, py: 1, alignItems: 'center' }}>
          <Box
            sx={{
              p: 0.5,
              bgcolor: 'primary.400',
              border: '1px solid',
              borderColor: 'primary.100',
              borderRadius: 99,
            }}
          >
            <Avatar
              imgProps={{ 'aria-labelledby': 'demo-task-card-assignee-name' }}
              src="https://i.scdn.co/image/ab67616d0000b273992e45c95fa03ee72c52a526"
            />
          </Box>
          <div>
            <Typography color="primary.100" fontWeight="semiBold" fontSize={12}>
              Assigned to
            </Typography>
            <Typography id="demo-task-card-assignee-name" variant="body2" fontWeight="semiBold">
              Michael Scott
            </Typography>
          </div>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LinearProgress
            aria-label="Progress"
            variant="determinate"
            value={60}
            sx={{
              flexGrow: 1,
              borderRadius: 10,
              backgroundColor: 'primary.400',
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 10,
                backgroundColor: '#fff',
              },
            }}
          />
          <Typography color="primary.50" variant="body2" fontWeight={700} sx={{ ml: 2 }}>
            60%
          </Typography>
        </Box>
      </Card>
    </Fade>
  );
}
