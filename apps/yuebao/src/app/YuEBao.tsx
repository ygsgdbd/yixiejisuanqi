"use client"

import {useState} from "react";

export default function YuEBao() {
    const [uuid, setUUID] = useState<string>()

    return (
        <div>
            {uuid}
        <button onClick={() => setUUID(crypto.randomUUID())}>Click</button>
        </div>
    )
}
