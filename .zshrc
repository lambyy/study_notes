### ENV variables ###

# make vim the default text editor
export EDITOR="vim"

# shortened prompt that includes git branch info
parse_git_branch() {
    git branch 2> /dev/null | sed -n -e 's/^\* \(.*\)/[\1]/p'
}
autoload -Uz vcs_info
precmd() {vcs_info}
zstyle ':vcs_info:git:*' formats '(%b)'

COLOR_DEF='%f'
COLOR_USR='%F{255}'
COLOR_DIR='%F{255}'
COLOR_GIT='%F{32}'
NEWLINE=$'\n'
setopt PROMPT_SUBST
# export PROMPT='${COLOR_USR}%n ${COLOR_DIR}%~ ${COLOR_GIT}$(parse_git_branch)${COLOR_DEF} $ '
export PROMPT='${COLOR_USR}%n ${COLOR_DIR}%~ ${COLOR_GIT}${vcs_info_msg_0_}% ${COLOR_USR}%% '

### other ###

# timestamps for bash history

export HISTTIMEFORMAT="%d%b%y%T "

# initialize node version manager
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# load aliases
[[ -f "$HOME/.aliases" ]] && source "$HOME/.aliases"

# load any local configuration
[[ -f "$HOME/.bashrc.local" ]] && source "$HOME/.bashrc.local"
export PATH="/usr/local/opt/openjdk@8/bin:$PATH"
export PATH="/usr/local/opt/libpq/bin:$PATH"
export PATH="/usr/local/opt/libpq/bin:$PATH"
export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"

source /usr/local/share/chruby/chruby.sh

export PYENV_ROOT="$HOME/.pyenv"
[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
