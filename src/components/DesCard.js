import PeopleIcon from "@mui/icons-material/People";
import { Card, CardContent, Typography, Avatar, Chip } from "@material-ui/core";
import { Stack } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ScheduleIcon from '@mui/icons-material/Schedule';
function DesCard() {
  return (
    <Card elevation={5} style={{ margin: 20, width:480 }}>
      <CardContent>
        <Stack direction="row">
          <Avatar style={{ margin: 10 }} />
          <Stack style={{ margin: 10 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Chip
                style={{ padding: 1, backgroundColor: "green", color: "white" }}
                icon={<LocalOfferIcon style={{color: "white" }} />}
                label="Offer"
              />
              <Stack direction="row">
                <ScheduleIcon/>
                <Typography style={{ marginLeft: 5 }}>
                  7/10/2021 7:49PM
                </Typography>
              </Stack>
            </Stack>
            <Typography>UI prototype for to-do apps</Typography>
            <Stack direction="row" alignItems="center">
              <PeopleIcon />
              <Typography style={{ marginLeft: 5 }}>
                Vo Van Toan - Meeting: Oh shiet! nhat Nguyen Khoa roi
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
export default DesCard;
