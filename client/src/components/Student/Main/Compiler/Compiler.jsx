import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-textmate";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ListItemText from "@material-ui/core/ListItemText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./Compiler.css";
const Compiler = () => {
  const ITEM_HEIGHT = 78;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const themes = [
    "xcode",
    "monokai",
    "github",
    "nord_dark",
    "textmate",
    "one_dark",
  ];
  const languages = ["c", "java"];

  const [themeName, setThemeName] = React.useState("github");
  const [language, setLanguage] = React.useState("java");

  const handleChange = (event) => {
    setThemeName(event.target.value);
  };
  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="container compiler-container">
      <div className="d-flex">
        <div className="col-md-6 float-left">
          <div className="select-language mr-auto">
            <FormControl
              style={{ width: "300px" }}
              size="small"
              className="mt-3 mb-0"
            >
              <InputLabel id="demo-simple-select-label">
                Select Language
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                onChange={handleLanguage}
                input={<OutlinedInput label="Select Language" />}
                MenuProps={MenuProps}
              >
                {languages.map((name) => (
                  <MenuItem key={name} value={name}>
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="col-md-6">
          <div className="select-theme  float-right">
            <FormControl
              style={{ width: "300px" }}
              size="small"
              className="mt-3 mb-0"
            >
              <InputLabel id="demo-simple-select-label">
                Select theme
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={themeName}
                onChange={handleChange}
                input={<OutlinedInput label="Select theme" />}
                //   renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {themes.map((name) => (
                  <MenuItem key={name} value={name}>
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <AceEditor
        className="mt-3"
        height="80vh"
        width="100%"
        placeholder="Your code goes here.."
        mode={language}
        theme={themeName}
        name="Editor"
        onChange={(value) => console.log(value)}
        fontSize={20}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        value={`public class MyClass {
    public static void main(String args[]) {
        int x=10;
        int y=25;
        int z=x+y;
        System.out.println("Sum of x+y = " + z);
    }
}`}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <button className="btn-hover color-11 mt-2 float-right">
        COMPILE <i className="fas fa-code  mr-2 ml-2"></i>
      </button>
    </div>
  );
};

export default Compiler;
