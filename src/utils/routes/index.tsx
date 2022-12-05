import Home from "../../components/Home";
import ComplianceReview from "../../components/ComplianceReview";
import Divisions from "../../components/Divisions";
import Clients from "../../components/Clients";
import Certificates from "../../components/Certificates";
import DocumentHub from "../../components/DocumentHub";
import Reports from "../../components/Reports";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/compliance-review",
    element: <ComplianceReview />,
  },
  {
    path: "/divisions",
    element: <Divisions />,
  },
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "/certificates",
    element: <Certificates />,
  },
  {
    path: "/document-hub",
    element: <DocumentHub />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
];

export default routes;
