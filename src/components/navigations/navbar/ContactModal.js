import React from "react";
import {
  formatDistanceToNowStrict,
  subDays,
  subHours,
  subMinutes,
} from "date-fns";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const now = new Date();

const contacts = [
  {
    id: "1",
    avatar: "",
    isActive: true,
    lastActivity: now.getTime(),
    name: "Alcides Antonio",
  },
  {
    id: "2",
    avatar: "",
    isActive: false,
    lastActivity: subHours(now, 2).getTime(),
    name: "Marcus Finn",
  },
  {
    id: "3",
    avatar: "",
    isActive: false,
    lastActivity: subMinutes(now, 15).getTime(),
    name: "Carson Darrin",
  },
  {
    id: "4",
    avatar: "",
    isActive: true,
    lastActivity: now.getTime(),
    name: "Fran Perez",
  },
  {
    id: "5",
    avatar: "",
    isActive: true,
    lastActivity: now.getTime(),
    name: "Jie Yan Song",
  },
  {
    id: "6",
    avatar: "",
    isActive: false,
    lastActivity: subDays(now, 2).getTime(),
    name: "Miron Vitold",
  },
  {
    id: "7",
    avatar: "",
    isActive: false,
    lastActivity: subHours(now, 6).getTime(),
    name: "Penjani Inyene",
  },
];

function ContactModal(props) {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
      }}
    >
      <Paper
        elevation={16}
        sx={{
          maxWidth: 320,
          mx: "auto",
          p: 2,
        }}
      >
        <Typography variant="h6">Contacts</Typography>
        <Box sx={{ mt: 2 }}>
          <List disablePadding>
            {contacts.map((contact) => (
              <ListItem disableGutters key={contact.id}>
                <ListItemAvatar>
                  <Avatar src={contact.avatar} />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Link to="" noWrap underline="none" variant="body2">
                      {contact.name}
                    </Link>
                  }
                />
                {contact.isActive ? (
                  <Typography
                    component="span"
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#53c853",
                    }}
                  />
                ) : (
                  <Typography color="textSecondary" noWrap variant="caption">
                    {formatDistanceToNowStrict(contact.lastActivity)} ago
                  </Typography>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Box>
  );
}

export default ContactModal;
