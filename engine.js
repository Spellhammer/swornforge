let swornForgeAssetCreator = function() {
    let app = {
        name: "SwornForge Asset Creator",
        staticOptions: {
            maxTrackSize: 6,
            builtinTypes: [
                "Companion",
                "Path",
                "Combat Talent",
                "Ritual",
                "Custom"
            ]
        },
        options: {
            assetName: "Cave Lion",
            name: true,
            description: "Your cat takes down its prey.",
            track: true,
            trackMax: 5,
            type: "Companion",
            customType: "Custom Guy",
        },
        powers: [
            {
                title: "Eager",
                unlocked: false,
                description: "When your cat chases down big game, you may Resupply with +edge (instead of +wits). If you do, take +1 supply or +1 momentum on a strong hit."
            },
            {
                title: "Inescapable",
                unlocked: false,
                description: "When you Enter the Fray or Strike by sending your cat to attack, roll +edge. On a hit, take +2 momentum."
            },
            {
                title: "Protective",
                unlocked: false,
                description: "When you Make Camp, your cat is alert to trouble. If you or an ally choose to relax, take +1 spirit. If you focus, take +1 momentum."
            }
        ],
        moves: [
            "Resupply",
            "Enter the Fray",
            "Strike",
            "Make Camp"
        ],
        transformers: {
            italicizeMoveNames: function( string, moves ) {
                moves.forEach( move => {
                    const regex = new RegExp(`\\b${move}\\b`, 'g');
                    string = string.replace(regex, `<i>${move}</i>`);
                } );

                return string;
            }
        }
    }

    return app;
}