#!/bin/sh
# This script installs NullShift.
#
# Found a bug? Report it here: https://github.com/itjeff/nullshift/issues

set -e -u

eval "git clone 'https://github.com/wlplease/nullshift.git'"

cd nullshift

echo "NullShift cloned! Installing dependencies..."

if command -v yarn >/dev/null 2>&1 ; then
  yarn install
else
  cat 1>&2 << 'EOA'
/=====================================\\
|       COMMAND NOT FOUND: 'yarn'      |
\\=====================================/

Uh oh! We couldn't find 'yarn' installed on your system.

You should first install 'yarn' on your system. 

For more information, visit yarn's installation page:

  https://classic.yarnpkg.com/lang/en/docs/install/

EOA
  exit 1
fi

cat <<-'EOM'


 \ | | | | | |   | |   / ___|| | | |_ _|  ___|_   _|
|  \| | | | | |   | |   \___ \| |_| || || |_    | |  
| |\  | |_| | |___| |___ ___) |  _  || ||  _|   | |  
|_| \_|\___/|_____|_____|____/|_| |_|___|_|     |_|  
  
  Type 'help' to see the list of available commands.
  Type 'dashboard' to display a summary.
  Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="\${config.repo}" target="_blank">here</a></u> for the Github repository.
  `;
  };

NullShift has been downloaded to the current directory.
You can start developing it with:

cd nullshift && yarn dev

This will open a local port at http://localhost:3000, 
where you can preview your website. To apply changes, edit:

config.json

And the changes should be applied upon saves!

EOM
