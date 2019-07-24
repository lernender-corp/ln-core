#!/bin/bash

set -e

packageName="$1"

dir="$PWD"
distDir="$PWD/dist"
buildDir="$PWD/dist/releases/${packageName}"
bundlesDir="$PWD/dist/bundles"
packagesDir="$PWD/dist/packages"
releaseDir="$PWD/dist/releases"

# echo "$dir"
# echo "$distDir"
# echo "$buildDir"
# echo "$bundlesDir"
# echo "$packagesDir"
# echo "$releaseDir"
rm -rf ${bundlesDir}
rm -rf ${packagesDir}
cp -r ${buildDir}/* ${distDir}
rm -rf ${releaseDir}
