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
                title: "Eager:",
                unlocked: false,
                description: "When your cat chases down big game, you may Resupply with +edge (instead of +wits). If you do, take +1 supply or +1 momentum on a strong hit."
            },
            {
                title: "Inescapable:",
                unlocked: false,
                description: "When you Enter the Fray or Strike by sending your cat to attack, roll +edge. On a hit, take +2 momentum."
            },
            {
                title: "Protective:",
                unlocked: false,
                description: "When you Make Camp, your cat is alert to trouble. If you or an ally choose to relax, take +1 spirit. If you focus, take +1 momentum."
            }
        ],
        moves: [
            "Face Danger",
            "Secure an Advantage",
            "Gather Information",
            "Heal",
            "Resupply",
            "Make Camp",
            "Undertake a Journey",
            "Reach Your Destination",
            "Compel",
            "Sojourn",
            "Draw the Circle",
            "Forge a Bond",
            "Test Your Bond",
            "Aid Your Ally",
            "Write Your Epilogue",
            "Enter the Fray",
            "Strike",
            "Clash",
            "Turn the Tide",
            "End the Fight",
            "Battle",
            "Endure Harm",
            "Face Death",
            "Companion Endure Harm",
            "Endure Stress",
            "Face Desolation",
            "Out of Supply",
            "Face a Setback",
            "Swear an Iron Vow",
            "Reach a Milestone",
            "Fulfill Your Vow",
            "Forsake Your Vow",
            "Advance",
            "Pay the Price",
            "Ask the Oracle",
            "Discover a Site",
            "Delve the Depths",
            "Find an Opportunity",
            "Reveal a Danger",
            "Check Your Gear",
            "Locate Your Objective",
            "Escape the Depths",
            "Reveal a Danger",
            "Mark Your Failure",
            "Learn From Your Failures",
            "Advance a Threat",
            "Take a Hiatus",
            "Wield a Rarity"
        ],
        transformers: {
            italicizeMoveNames: function( string, moves ) {
                moves.forEach( move => {
                    const regex = new RegExp(`\\b${move}\\b`, 'g');
                    string = string.replace(regex, `<i>${move}</i>`);
                } );

                return string;
            }
        },
        methods: {
            download: function( node ) {
                let link = document.getElementById('download-link');
                let output = document.getElementById('output');

                html2canvas(node).then(canvas => {
                    output.innerHTML = '';
                    output.appendChild(canvas);
                });
            }
        }
    }

    return app;
}