"INIT.VIM (config file)

syntax enable "syntax
filetype plugin on "Filebrowsing 
set nu
set relativenumber
set tabstop=4 softtabstop=4
set shiftwidth=4
set cindent
set expandtab
set smartindent
set exrc
set hidden
set guicursor=
set noerrorbells
set nowrap
set incsearch
set scrolloff=8
let mapleader =","
set nohlsearch
"set colorcolumn=80
set signcolumn=yes

filetype plugin on

set path+=** "tab-completion for all file-related tasks
set wildmenu "Display all matching files when we tab complete

"command! MakeTags !ctags -R . "Use ctrl+] to jump to tag under cursor Use g, ctrl+] for abiguous tags Use ctrl+t to jump back to the tag stack

"*How to use autocomplete :help ins-completion

" FILEBROWSING:
"let g:netrw_banner=0
"let g:netrw_browse_split=4
"let g:netrw_altv=1
"let g:netrw_liststyle=3
"let g:netrw_list_hide=netrw_gitignore#Hide()
"let g:netrw_list_hide.=',\(^\|\s\s\)\zs\.\S\_+'
"this gives us a tree file browser. <CR>/v/t to open in an h-split/vsplit/tab
"see further (netrw) or |netrw-browser-maps| for keybindings

nnoremap ,html :-1read $HOME/.config/nvim/.skeleton.html<CR>3jelf>
map <leader>b :Neoformat prettier<CR>

call plug#begin('$HOME/.config/nvim/plugged')

Plug 'gruvbox-community/gruvbox'
Plug 'preservim/nerdcommenter'
Plug 'jiangmiao/auto-pairs'
"Plug 'nvim-telescope/telescope.nvim'
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
Plug 'junegunn/fzf.vim'
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'sbdchd/neoformat'

call plug#end()

colo gruvbox
highlight Normal guibg=none

" open new split panes to right and below
set splitright
set splitbelow
" turn terminal to normal mode with escape
tnoremap <Esc> <C-\><C-n>
" start terminal in insert mode
au BufEnter * if &buftype == 'terminal' | :startinsert | endif
" open terminal on ctrl+n
function! OpenTerminal()
  split term://bash
  resize 10
endfunction
nnoremap <c-n> :call OpenTerminal()<CR>

set splitbelow splitright
