
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { PushSpinner } from 'react-spinners-kit';
import * as Yup from "yup";
import { EditorState, convertToRaw } from 'draft-js';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { addSection, getCourse } from '../../store/actions/datacollection';
import { saveEditorContent } from './reuseable';

const CreateSections = (props) => {
    const [erorAlert,setError]=useState(false)
    const notifications =useSelector((value)=>value.notification);
    const [btnload,setbtn]=useState(false)
    useEffect(()=>{
        if(notifications && notifications.notice){
        
        setbtn(false)
        }})
    const [loadingbtn, setloadbtn] = useState(false);
    
    const dispatch=useDispatch();
    const newcourse=useSelector((value)=>value.AddCourse)
    const [getnewcourse,setnewfield]=useState(false);
    const editorStyle = {
        border: '1px solid #ccc',
        minHeight: '200px',
        padding: '10px',
        borderRadius: '5px'
      };
    const toolbarPlugin = createToolbarPlugin();
    const { Toolbar } = toolbarPlugin;
  
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
  
    const handleEditorChange = (state) => {
      setEditorState(state);
    };
  
    const editorConfig = {
      toolbar: {
        // Customize the toolbar options
        options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'image'],
        inline: {
          options: ['bold', 'italic', 'underline'],
        },
        blockType: {
          options: ['Normal', 'H1', 'H2', 'H3', 'Blockquote'],
        },
        list: {
          options: ['unordered', 'ordered'],
        },
      },
      // Add any other customizations
      // For example, you can set the placeholder text:
      placeholder: 'Start typing...',
      // You can customize the editor's style:
      editorStyle: {
        border: '1px solid #ccc',
        minHeight: '200px',
        padding: '10px',
      },
      // ... other configuration options
    };
  















    const Formik = useFormik({
        initialValues: {
          title: "",
          content:`${ props.id ? props.id :"" }` ,
          detail: "",
      
        },
    
        enableReinitialize: true,
        validationSchema: Yup.object({
         title: Yup.string().required("field required"),
         detail: Yup.string().required("field required"),
      
        
        }),
        onSubmit: (value) => { 
            console.log(value);
            setbtn(true)
         
       dispatch( addSection(value))
      
        }
      });



      useEffect(() => {
        if (notifications && notifications.notice) {
          setloadbtn(false);
          dispatch(   

            getCourse(props.mainid))
            alert(props.mainid)
          
        }
      });
  
  return (
<div className='editorcontainer' id="editor">
<Form className='editorcontainer' onSubmit={Formik.handleSubmit}>
    <TextField  
    style={{ margin: "10px 10px 10px 0", color: "red" }}
              name="title"
              label="Section header"
              {...Formik.getFieldHelpers("title")}
              value={Formik.values.title}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              error={
                Formik.touched.title &&
                Boolean(Formik.errors.title)
              }
              helperText={
                Formik.touched.title && Formik.errors.title
              }
    />
  
    <div className='Editor'>


    <Editor
      editorState={editorState}
      onEditorStateChange={handleEditorChange}
      {...editorConfig}
      editorStyle={editorStyle}
      plugins={Toolbar}
      onChange={() =>{
            Formik.setFieldValue("detail", saveEditorContent(convertToRaw, editorState))
            setError(false)
          
       
        }
            }
            
    />
  </div>
  {erorAlert ? 
<span style={{color:"red",fontFamily:"Roboto condensed"}}>
  field can not be empty!!
</span>:null}

{btnload ?
    <PushSpinner color="aqua" size={17} />

    :  <Button type='submit' style={{margin:"10px"}}>Add Section</Button>
}

  </Form>

</div>

  );
};

export default CreateSections;

