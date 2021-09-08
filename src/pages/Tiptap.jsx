import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import EditorFunctions from './EditorFunctions'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <div>
      <h2>Create Post Page</h2>
      <EditorFunctions/>
     

    </div>
  )
}

export default Tiptap