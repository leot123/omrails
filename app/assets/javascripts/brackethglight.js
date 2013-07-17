[
    // Toggle Global Enable
    {
        "caption": "BracketHighlighter: Toggle Global Enable",
        "command": "bh_toggle_enable"
    },
    // Search to end of file for bracket
    {
        "caption": "BracketHighlighter: Match Brackets (ignore threshold)",
        "command": "bh_key",
        "args": {"lines" : true}
    },
    // Remove brackets
    {
        "caption": "BracketHighlighter: Remove Brackets",
        "command": "bh_remove_brackets"
    },
    // Go to left bracket
    {
        "caption": "BracketHighlighter: Jump to Left Bracket",
        "command": "bh_key",
        "args":
        {
            "lines" : true,
            "plugin":
            {
                "type": ["__all__"],
                "command": "bh_modules.bracketselect",
                "args": {"select": "left"}
            }
        }
    },
    // Go to right bracket
    {
        "caption": "BracketHighlighter: Jump to Right Bracket",
        "command": "bh_key",
        "args":
        {
            "lines" : true,
            "plugin":
            {
                "type": ["__all__"],
                "command": "bh_modules.bracketselect",
                "args": {"select": "right"}
            }
        }
    },
    // Select text between brackets
    {
        "caption": "BracketHighlighter: Select Bracket Content",
        "command": "bh_key",
        "args":
        {
            "lines" : true,
            "plugin":
            {
                "type": ["__all__"],
                "command": "bh_modules.bracketselect"
            }
        }
    },
    // Fold contents between brackets
    {
        "caption": "BracketHighlighter: Fold Bracket Content",
        "command": "bh_key",
        "args":
        {
            "plugin": {
                "type": ["__all__"],
                "command" : "bh_modules.foldbracket"
            }
        }
    },
    { "caption": "-" },
    // Toggle between string and regex escape mode for string brackets
    {
        "caption": "BracketHighlighter: Toggle String Bracket Escape Mode",
        "command": "bh_toggle_string_escape_mode"
    },
    // Toggle high visibility mode
    {
        "caption": "BracketHighlighter: Toggle High Visibility Mode",
        "command": "bh_toggle_high_visibility"
    },
    { "caption": "-" },
    // Select tag name of HTML/XML tag (both opening name and closing)
    {
        "caption": "BracketHighlighter: Select Tag Name (closing and opening)",
        "command": "bh_key",
        "args":
        {
            "plugin":
            {
                "type": ["cfml", "html", "angle"],
                "command": "bh_modules.tagnameselect"
            }
        }
    },
    // Select the attribute to the right of the cursor (will wrap inside the tag)
    {
        "caption": "BracketHighlighter: Select Next Attribute (right)",
        "command": "bh_key",
        "args":
        {
            "plugin":
            {
                "type": ["cfml", "html", "angle"],
                "command": "bh_modules.tagattrselect",
                "args": {"direction": "right"}
            }
        }
    },
    // Select the attribute to the left of the cursor (will wrap inside the tag)
    {
        "caption": "BracketHighlighter: Select Next Attribute (left)",
        "command": "bh_key",
        "args":
        {
            "plugin":
            {
                "type": ["cfml", "html", "angle"],
                "command": "bh_modules.tagattrselect",
                "args": {"direction": "left"}
            }
        }
    },
    // Convert single quote string to double quoted string and vice versa
    // Will handle escaping or unescaping quotes within the string
    {
        "caption": "BracketHighlighter: Swap Quotes",
        "command": "bh_key",
        "args":
        {
            "lines" : true,
            "plugin":
            {
                "type": ["single_quote", "double_quote", "py_single_quote", "py_double_quote"],
                "command": "bh_modules.swapquotes"
            }
        }
    },
    // Swap Brackets
    {
        "caption": "BracketHighlighter: Swap Brackets",
        "command": "swap_brackets"
    },
    // Surround selection with brackets from quick panel
    {
        "caption": "BracketHighlighter: Wrap Selections with Brackets",
        "command": "wrap_brackets"
    }
]