/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { Flex, Text, View } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import * as React from "react";
export default function NoteCard(props) {
  const { note, audioElem, actionElem, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="357.33px"
      height="326px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 4px 12px rgba(0.0042708334513008595, 0.17368076741695404, 0.512499988079071, 0.10000000149011612)"
      borderRadius="11px"
      padding="40px 40px 40px 40px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NoteCard")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="600"
        color="rgba(13,26,38,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={note?.title}
        {...getOverrideProps(overrides, "note_title")}
      ></Text>
      <View
        width="272px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        children={audioElem}
        {...getOverrideProps(overrides, "audioElem")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={note?.transcription}
        {...getOverrideProps(overrides, "note_text")}
      ></Text>
      <View
        width="272px"
        height="45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        children={actionElem}
        {...getOverrideProps(overrides, "actionElem")}
      ></View>
    </Flex>
  );
}
