import React from "react";
// import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import LaunchIcon from "@material-ui/icons/Launch";

export const A = styled.a`
  text-decoration: none;
`;

export const MyLaunchIcon = styled(LaunchIcon)`
&& {

  width: .6em;
  padding-left: 2px;
  /* color: red; */
}
`;

const MyUrlfield = ({ record = {}, source}) => (
  <A href={record[source]} >
    {record[source]}
    <MyLaunchIcon/>
  </A>
);

// export default withStyles(styles)(MyUrlfield);
export default MyUrlfield;