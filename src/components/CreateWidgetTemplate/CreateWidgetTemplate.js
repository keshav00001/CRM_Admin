import React, { useRef, useState } from "react";
import { render } from "react-dom";

import EmailEditor from "react-email-editor";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";

const CreateWidgetTemplate = (props) => {
  const [data, setData] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const emailEditorRef = useRef(null);

  //download template as a html file
  function download(filename, text) {
    var blob = new Blob([text], { type: "text/plain" });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  }
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      var { design, html } = data;
      // console.log('exportHtml', design);

      //set localStorage
      localStorage.setItem("html", html);
      setData(`<iframe srcdoc="${html}" title='3' width="100%" ></iframe>`);
      setOpen(true);
      props.setTemplateCode(html);
      props.setTemplateObject(design);

      // download('h.html', html)
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
  };

  return (
    <Box>
      <Box>
        <Box sx={{ textAlign: "center", mt: 2, mb: 2 }}>
          <Button variant="outlined" onClick={exportHtml}>
            Export
          </Button>
        </Box>

        <EmailEditor
          ref={emailEditorRef}
          onLoad={onLoad}
          onReady={onReady}
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
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Widget</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <pre>
              <code id="markup"> {data}</code>
            </pre>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CreateWidgetTemplate;
