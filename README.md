## Plan
Mon: research for task 1
Tue: research for task 2
Wed: impliment task 1
Thu: impliment task 2
Fri: Finishing both tasks
Sat: prepare for interview
# Task I
## PS: Document search & Answer
1. [ ] Files reading from storage (any text file -txt, pdf, doc )
2. [ ] Preprosessing , Create embedings & Create AI model
3. [ ] User can ask any question & AI model that will ans each general questions either from document data or basic inteligence. Also give the pdf/text/doc file name from which ans is formed. (offline)
4. [ ] Suggestions – try Gemini nano, own CNN , RNN , Finally try Llama-2 7b
5. [ ] Training process / trasfer learning process should use less computing (use batching)
***
### Thought Process
1. Find models that can be run locally and suitable for given task
-->  Ollama, Llamafile, Mistral AI, [Gemini nano](https://huggingface.co/wave-on-discord/gemini-nano/tree/main), BERT
1. Scenarios where preprocessing is needed
--> Indexes, Appendix, OCR, 
1. Generate embeddings locally
--> sentence-transformers
1. Find open source embedding
--> open source, veristyle 
1. Locaal vector databases
--> Chroma db, Milvus
1. Tackle image pdfs
--> [Tesseract](https://github.com/tesseract-ocr/tessdoc, [sparrow](https://github.com/katanaml/sparrow), [layoutparser](https://layout-parser.github.io/), [pdfplumber](https://github.com/jsvine/pdfplumber?tab=readme-ov-file)
1. Langchain provided splitters 
--> The `RecursiveCharacterTextSplitter` employs recursion as the core mechanism to accomplish text splitting.
1. Is preprocessing necessary[?](https://www.google.com/search?q=preprocessing+before+embedding&oq=preprocessing+before+embedding&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yDQgCEAAYhgMYgAQYigUyDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyDQgFEAAYhgMYgAQYigUyCggGEAAYgAQYogQyCggHEAAYgAQYogQyCggIEAAYgAQYogQyBggJEC4YQNIBCDg0MTZqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8)
--> *refer to Jupyter notebook cell*
### Insights
- Gemini Nano is in beta version and not all android devices supports it
- Ollama supports several LLM models such as Llama 3, Phi3, Gemma, mistral and others. It is by far the easiest way to run an LLM locally for inference if you are looking for a simple CLI tool.
- Llama models needs approval from Meta
- Gemini Embedding are done through [API service](https://cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings)
- Good Embedding model will give more accurate results
- By default, Chroma uses the [Sentence Transformers](https://www.sbert.net/) `all-MiniLM-L6-v2` model to create embeddings. This embedding model can create sentence and document embeddings that can be used for a wide variety of tasks. This embedding function runs locally on your machine.
- ChromaDB stores the actual database (vectors and **metadata**) locally in a SQLite file.
- interplay between Model Size + Instruct Training

## Shortlisted Tech
0. Sentence transformer: [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)
0. Database: Chroma DB
0. LLMs:  [bling-phi-3-gguf](https://huggingface.co/llmware/bling-phi-3-gguf/tree/main),  [Qwen2.5-5M-Instruct](https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct/tree/main)
## Implimentation
0. set up chroma db with persistent storage
1. set up sentence transformer
2. test embeddings for preprocessing
3. 

## References
[Generating text embeddings locally using sentence-transformers](https://saeedesmaili.com/how-to-use-sentencetransformers-to-generate-text-embeddings-locally/)
[Getting Started with Chroma DB](https://www.datacamp.com/tutorial/chromadb-tutorial-step-by-step-guide)
[BLING Model Series](https://medium.com/@darrenoberst/small-instruct-following-llms-for-rag-use-case-54c55e4b41a8)