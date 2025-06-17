function emojiCallFunction(cb) {
    fetch
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    "Emoji Fetch Failed"
                );
            }
            return response.json();
        })
        .then((data) => {
            cb(data);
        })
        .catch((error) => {
            console.error(
                "Error Occured:",
                error
            );
            cb({});
        });
}

function randomEmoji(emojiIn) {
    const randombtn =
        document.getElementById(
            "generate-random-btn"
        );
    randombtn.addEventListener(
        "click",
        () => {
            emojiShow(emojiIn);
        }
    );
}

function emojiShow(emojiInfo) {
    const Moodfeel =
        Object.keys(emojiInfo);
    const randomFeel =
        Moodfeel[
            Math.floor(
                Math.random() *
                    Moodfeel.length
            )
        ];
    const emojiIcon =
        emojiInfo[randomFeel];
    if (
        emojiIcon &&
        emojiIcon.length > 0
    ) {
        const anyEmoji =
            emojiIcon[
                Math.floor(
                    Math.random() *
                        emojiIcon.length
                )
            ];
        previewEmoji(
            randomFeel,
            anyEmoji.emoji
        );
    }
}

function previewEmoji(mood, emo) {
    document.getElementById(
        "emoji-name"
    ).textContent = mood;
    document.getElementById(
        "emoji"
    ).textContent = emo;
}

function defaultEmoji() {
    emojiCallFunction(function (
        emojiData
    ) {
        document
            .querySelectorAll(
                ".feeling-button"
            )
            .forEach((button) => {
                button.addEventListener(
                    "click",
                    () => {
                        const feeling =
                            button
                                .dataset
                                .feeling;
                        const emoji =
                            emojiData[
                                feeling
                            ];
                        if (
                            emoji &&
                            emoji.length >
                                0
                        ) {
                            const anyEmoji =
                                emoji[
                                    Math.floor(
                                        Math.random() *
                                            emoji.length
                                    )
                                ];
                            previewEmoji(
                                feeling,
                                anyEmoji.emoji
                            );
                        }
                    }
                );
            });
        randomEmoji(emojiData);
        emojiShow(emojiData);
    });
}

defaultEmoji();
