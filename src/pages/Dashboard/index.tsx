import { Button } from "@mui/material";
import { useThemeContext } from "../../shared/contexts";
export function Dashboard() {
  const { toggleTheme } = useThemeContext();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>conteudo....</p>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        {" "}
        hellou{" "}
      </Button>
    </div>
  );
}
