import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import axios from 'axios'

// import './styles.scss'

class MenuBar extends React.Component{
  render(props){
    if (!this.props.editor) {
      return null
    } else {
      return (
        
        <>
          <button

            onClick={() => this.props.editor.chain().focus().toggleBold().run()}
            type="button"
            className={this.props.editor.isActive('bold') ? 'is-active' : ''}
            
          >
            <b>B</b>
          </button>
          <button
            onClick={() => this.props.editor.chain().focus().toggleItalic().run()}
            type="button"
            className={this.props.editor.isActive('italic') ? 'is-active' : ''}
          >
            <b><i>I</i></b>
          </button>
          <button
            onClick={() => this.props.editor.chain().focus().toggleStrike().run()}
            type="button"
            className={this.props.editor.isActive('strike') ? 'is-active' : ''}
          >
            <b><strike>S</strike></b>
          </button>
          <button
            onClick={() => this.props.editor.chain().focus().toggleCode().run()}
            type="button"
            className={this.props.editor.isActive('code') ? 'is-active' : ''}
          >
            <b>code</b>
          </button>
          <button onClick={() => this.props.editor.chain().focus().unsetAllMarks().run()}
          type="button"
          >
            <b>clear marks</b>
          </button>
          <button
            onClick={() => this.props.editor.chain().focus().setParagraph().run()}
            type="button"
            className={this.props.editor.isActive('paragraph') ? 'is-active' : ''}
          >
            <b>paragraph</b>
          </button>
          <button
            onClick={() => this.props.editor.chain().focus().toggleHeading({ level: 1 }).run()}
            type="button"
            className={this.props.editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          >
            <b>h1</b>
          </button>
          <button
            onClick={() => this.props.editor.chain().focus().toggleHeading({ level: 2 }).run()}
            type="button"
            className={this.props.editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          >
            <b>h2</b>
          </button>
          <button
            onClick={() => this.props.editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={this.props.editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
          >
            <b>h3</b>
          </button>
          <button
            onClick={() => this.props.editor.chain().focus().toggleHeading({ level: 4 }).run()}
            type="button"
            className={this.props.editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
          >
            <b>h4</b>
          </button>
          <button
            onClick={() => this.props.editor.chain().focus().toggleBulletList().run()}
            type="button"
            className={this.props.editor.isActive('bulletList') ? 'is-active' : ''}
          >
           <b>bullet</b>
          </button>
          <button
            onClick={() => this.props.editor.chain().focus().toggleOrderedList().run()}
            type="button"
            className={this.props.editor.isActive('orderedList') ? 'is-active' : ''}
          >
            <b>unordered </b>
          </button>
          <button
            onClick={() => this.props.editor.chain().focus().toggleCodeBlock().run()}
            type="button"
            className={this.props.editor.isActive('codeBlock') ? 'is-active' : ''}
          >
            <b>code block</b>
          </button>
          <button
            onClick={() => this.props.editor.chain().focus().toggleBlockquote().run()}
            type="button"
            className={this.props.editor.isActive('blockquote') ? 'is-active' : ''}
          >
            <b>blockquote</b>
          </button>
          <button onClick={() => this.props.editor.chain().focus().setHorizontalRule().run()}
          type="button">
            <b>horizontal rule</b>
          </button>
          <button onClick={() => this.props.editor.chain().focus().setHardBreak().run()}
          type="button">
            <b>hard break</b>
          </button>
          <button onClick={() => this.props.editor.chain().focus().undo().run()}
          type="button">
            <b>undo</b>
          </button>
          <button onClick={() => this.props.editor.chain().focus().redo().run()}
          type="button">
            <b>redo</b>
          </button>
        </>
      )
    }
  }
} 

export default (props) => {
  const [articleContent, setArticleContent] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
    `,
    onUpdate() {
      const html = this.getHTML()
      setArticleContent(html)
      
    }
  })
  const submittingFunction = (event) =>{
    // const json = getJSON()
    event.preventDefault()
     console.log(articleContent)
     //do axios POST here

     axios.post(`http://localhost:4000/api/cities/${props.match.params.id}`, {
       content:articleContent
     })
     .then((response)=>{
       console.log(response)
       setShouldRedirect(true)
     })
  }
  let jsx = ''
  if (shouldRedirect){
    return(
      <Redirect to={`/cities/${props.match.params.id}`}/>
    )
    
  } else{
    return (
      <div>
        <form onSubmit={submittingFunction}>
            <MenuBar editor={editor} />
            <EditorContent editor={editor}/>
            <button type="submit" >SUBMIT</button>
        </form>
    </div>
    )

  }
}