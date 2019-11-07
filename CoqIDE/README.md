
TEST2
TEST
Install Coq with opam
What is opam?

Opam is the package manager for the OCaml programming language, the language in which Coq is implemented. Opam 2 is the recommended version, and is assumed below. Instructions on how to install opam itself are available on the opam website. The following command displays the version of opam you have installed:

opam --version

Follow the instructions below to install the last stable version of Coq and additional packages. Instructions target an opam newcomer.
Initialize opam

Once opam is installed, it must be initialized before its first usage:

opam init
eval $(opam env)

opam init will prompt you to allow opam to set up initialization scripts, which is generally fine to accept. Otherwise, every time a new shell is opened you have to type in the eval $(opam env) command above to update environment variables.

By default, opam will use the global installation of OCaml. You can initialize opam with an explicit compiler version, for example 4.05.0, with the option --compiler=ocaml-base-compiler.4.05.0. See also the section "Managing different versions of OCaml and Coq" below, about switches and roots.
Install Coq

# Pin the coq package to version 8.10.1 and install it.
opam pin add coq 8.10.1

Pinning prevents opam from upgrading Coq automatically, as it may cause inadvertent breakage in your Coq projects. You can choose to upgrade Coq explicitly to $NEW_VERSION with essentially the same command:

opam pin add coq $NEW_VERSION

To check that the installation was successful, coqc -v should print the version of Coq.
Install CoqIDE

One may also want to install CoqIDE. Note that this requires GTK+ development files (gtksourceview2) to be available on the system.

opam install coqide

For alternative user interfaces / editors, see instructions on their own homepage, e.g. https://proofgeneral.github.io/#quick-installation-instructions for Proof General.
Using opam to install Coq packages

Coq packages live in a repository separate from the standard OCaml repository. The following command adds that repository to opam:

opam repo add coq-released https://coq.inria.fr/opam/released

The next command lists all the Coq package names followed by a short description:

opam search coq

One can access a more detailed description of a package, say coq-sudoku, by typing

opam show coq-sudoku

One can install the package by typing

opam install coq-sudoku

Managing different versions of OCaml and Coq

By default, opam will use the global OCaml installation. Opam can handle different versions of OCaml and other packages (including Coq) via switches or roots.
Switches

Switches provide separate environments, with their own versions of OCaml and installed packages.

The following command creates a switch named with-coq with OCaml 4.05.0:

# Run one of the following depending on your version of opam
opam switch create with-coq 4.05.0

Change to an existing switch named other-switch with this command:

opam switch other-switch
eval $(opam env)

Roots

Opam stores all its configuration (including switches) in a directory called root (by default, ~/.opam). The path to the root can be set using the $OPAMROOT environment variable, providing an alternative way of creating fresh opam environments.

The main benefit of roots is that they can be used simultaneously, but they require some external bookkeeping. In comparison. switches are entirely managed by opam, and they can share the global configuration of a single root.

# Set a new root location
export OPAMROOT=~/.opam-coq.8.10.1

# Initialize the root with an explicit OCaml version.

opam init -n --compiler=ocaml-base-compiler.4.05.0

# Install Coq in this new root (same commands as above)
opam pin add coq 8.10.1

Every time a new shell is opened, or you want to use a different root, type in the following lines:

export OPAMROOT=~/.opam-coq.8.10.1
eval $(opam env)

