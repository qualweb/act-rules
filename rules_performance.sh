#!/bin/bash

run_test () {
  START=`date +%s%N`
  OUTPUT=$(npm run test-custom-r$1 -- $2)

  if [[ $OUTPUT == *"failing"* ]]; then
    END=`date +%s%N`
    DURATION=$(( ($END - $START) / 1000000 ))
    echo "$2","$1","0","0","0","0","0","0","crash","$DURATION" >> "timing.csv"
  else
    PASSED=$(echo $OUTPUT | awk -F'passed:' '{ print $2 }')
    FAILED=$(echo $OUTPUT | awk -F'failed:' '{ print $2 }')
    WARNING=$(echo $OUTPUT | awk -F'warning:' '{ print $2 }')
    OUTCOME=$(echo $OUTPUT | awk -F'outcome:' '{ print $2 }')
    CODE=$(echo $OUTPUT | awk -F'code:' '{ print $2 }')
    MAPPING=$(echo $OUTPUT | awk -F'mapping:' '{ print $2 }')

    PASSED=$(echo $PASSED | awk -F' ' '{ print $1 }')
    FAILED=$(echo $FAILED | awk -F' ' '{ print $1 }')
    WARNING=$(echo $WARNING | awk -F' ' '{ print $1 }')
    OUTCOME=$(echo $OUTCOME | awk -F' ' '{ print $1 }')
    CODE=$(echo $CODE | awk -F' ' '{ print $1 }')
    MAPPING=$(echo $MAPPING | awk -F' ' '{ print $1 }')

    if [[ $OUTCOME == "inapplicable" ]]; then
      RESULTS=1
      INNAPLICABLE=1
    else
      RESULTS=$(($PASSED + $FAILED + $WARNING))
      INNAPLICABLE=0
    fi

    END=`date +%s%N`
    DURATION=$(( ($END - $START) / 1000000 ))

    echo "$2","$1","$CODE","$MAPPING","$PASSED","$FAILED","$WARNING","$INNAPLICABLE","$OUTCOME","$DURATION" >> "timing.csv"
  fi
}

IFS=$'\r\n' GLOBIGNORE='*' command eval  'URLS=($(cat urls))'

for j in "${URLS[@]}"; do
    for i in {1..39}; do
      run_test $i $j
    done
done



