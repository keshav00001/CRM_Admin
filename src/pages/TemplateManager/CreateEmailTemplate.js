import React, { useState, useRef } from "react";
import { Box, Button } from "@mui/material";
import EmailEditor from "react-email-editor";
import "./../../styles/CreateEmailTemplate.css";
import { useLocation } from "react-router-dom";

function CreateEmailTemplate(props) {
  const [tempData, setTempData] = useState();
  const emailEditorRef = useRef(null);

  const location = useLocation();
  const tempJson = location.state;
  console.log("----TempJson", tempJson);

  const publishHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;

      console.log("+++++++++++++++++++++++++s", design);
      const jsonData = JSON.stringify(design);
      localStorage.setItem("design", jsonData);

      setTempData(html);
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // const json = localStorage.getItem("design");
    // const tempJson = JSON.parse(json);
    tempJson && emailEditorRef.current.editor.loadDesign(tempJson);
  };

  return (
    <div>
      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
        projectId={67023}
        id="editor"
        options={{
          id: "editor-container",
          displayMode: "email",
          appearance: {
            theme: "dark",
          },
        }}
      />
      <Box className="publish-button">
        <Button variant="contained" color="success" className="saveBtn">
          Save
        </Button>
        <Button
          variant="contained"
          className="publishBtn"
          onClick={publishHtml}
        >
          Publish
        </Button>
      </Box>
      <div>{tempData}</div>
    </div>
  );
}

export default CreateEmailTemplate;
