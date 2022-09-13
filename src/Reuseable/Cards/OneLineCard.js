import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import WriteModal from "../WriteModal";
import style from "../../components/Customer/Insights/Insights.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const OneLineCard = ({
  styles,
  size,
  icon,
  title,
  content,
  contentType,
  head,
  iconComponent,
  modal
}) => {
  return (
    <Grid item xs={size}>
      <Item>
        <div className={style.warranty}>
          {head && <h1>{head}</h1>}
          {icon && iconComponent}
          <p>{title}</p>
          {contentType === "text" ? (
            <p>{content}</p>
          ) : contentType === "button" ? (
            content === "Write" ? (
              <WriteModal />
            ) : (
              <Button variant="outlined">{content}</Button>
            )
          ) : null}
        </div>
      </Item>
    </Grid>
  );
};

export default OneLineCard;
