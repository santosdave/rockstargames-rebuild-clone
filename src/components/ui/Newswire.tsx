import React from "react"
import { Card } from 'react-bootstrap';
import { NEWSWIRE_ITEMS } from '@/utils/constants'
import MainContainer from "../layout/MainContainer";
import NewswireCollectionSection from "../NewswireCollectionSection";

type Props = {

}

type Newswire = {
    pic: string;
    title: string;
    release_date: string;
    description: string;
};

export default function Newswire({ }: Props) {
    return (
        <>
            <NewswireCollectionSection title="Newswire" />
        </>
    )
}

