// Chakra imports
import {
  Flex,
  Grid,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  DocumentIcon,
} from "components/Icons/Icons.js";
import React, { useEffect, useState } from "react";
import { FaFileSignature, FaUserShield } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { getReports, getGeneralReports } from "services/apis/documentsServices";
import ActiveUsers from "./components/ActiveUsers";
import MiniStatistics from "./components/MiniStatistics";
import SalesOverview from "./components/SalesOverview";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");
  const [ reports, setReports ] = useState([])
  const [ generalReports, setGeneralReports ] = useState([])
  
  useEffect(() => {
    getReports().then(resp => setReports(resp))
    getGeneralReports().then(resp => setGeneralReports(resp))
  },[])

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Documentos"}
          amount={generalReports?.documents}
          percentage={0}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Resoluciones"}
          amount={generalReports?.resolutions}
          percentage={0}
          icon={<FaFileSignature h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Otros Documentos"}
          amount={generalReports?.others}
          percentage={0}
          icon={<IoDocumentTextSharp h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Usuarios"}
          amount={generalReports?.users}
          percentage={0}
          icon={<FaUserShield h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'
        mb={{ lg: "26px" }}>
        <ActiveUsers
          title={"Documentos registrados"}
          percentage={0}
          chart={<BarChart data={reports}/>}
        />
        <SalesOverview
          title={"Resoluciones Vs Otros Documentos"}
          percentage={0}
          chart={<LineChart data={reports} />}
        />
      </Grid>
    </Flex>
  );
}
