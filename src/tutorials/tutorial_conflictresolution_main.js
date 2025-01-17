//TL Conflict Resolution#10
function getTutorialSteps() {
    return [
        function() {
            tutorial.text = qsTr("Welcome to the conflict resolution tutorial. This tutorial is very dense with "
                               + "information, so take it slow and feel free to revisit as needed - until you have "
                               + "a solid grasp of the types of conflicts and tools to manage them.")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("Some info primarily applies to Bethesda Game Studios games. If this does not apply "
                               + "to you, you can exit the tutorial when you reach the section about \"record conflicts\".")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("There are multiple types of conflicts you may encounter when dealing with mods. "
                               + "This tutorial will try to cover and explain how to deal with all of them.")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("First up are file conflicts. These occur when two mods contain the same file. "
                               + "Most commonly this happens when several mods replace the same standard asset from "
                               + "the game, like the texture of an armor.")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("As an example, say you install \"Mod  A\" which contains stylish new iron and leather armor. "
                               + "Then you install \"Mod B\" which contains sexy ebony and leather armor. Obviously there is a "
                               + "conflict now: which leather armor to use?")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("If you were to install the mods manually, when installing \"Mod B\" you would be asked if you want "
                                 +"to overwrite conflicting files. If you choose yes, you get the leather armor from \"Mod B\" otherwise "
                                 +"you keep the one from \"Mod A\". If you later decide you made the wrong choice, "
                                 +"you have to reinstall one of the mods.")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("With MO2, both \"Mod A\" and \"Mod B\" are installed independently, without overwriting "
                               + "any files. Initially, \"Mod B\" gets to provide the leather armor because it's automatically "
                               + "assigned the higher priority installation <B>order number</B>. "
                               + "Usually the \"Priority\" column is ordered such that the highest number "
                               + "assigned to a mod is at the bottom of modlist.               "
                               + "and the lowest number \"0\" at the top of the priotity column."
                               + "Which sets the standard that mods loaded lower in the list wins file conflicts.")
            highlightItem("modList", true)
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("However, you can change the installation order of a mod at any time by dragging and dropping mods in the list. "
                               + "If you assign \"Mod A\" a higher priority number than \"Mod B\" "
                               + "it overwrites the leather armor, no re-installation required. "
                               + "Since the priorities of mods in this list are treated as if the mods were installed in that order, "
                               + "you can think of this as a way to change the order in which mods are installed. "
                               + "this can generally be referred to as <b>mod installation order</b>  .")
            highlightItem("modList", false)
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("If the \"Flags\" column is enabled in the mod list, it will show you which mods are involved in a conflict.")
            waitForClick()
        },
        function() {
            unhighlight()
            tutorial.text = qsTr("<img src=\"qrc:///MO/gui/modlist_priority\" /> This is modlist install priority order, make sure lowest number always sorted to top.")
            waitForClick()
        },
        function() {
            unhighlight()
            tutorial.text = qsTr("<img src=\"qrc:///MO/gui/emblem_conflict_overwrite\" /> indicates that the mod overwrites files that are also available in another mod.")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("<img src=\"qrc:///MO/gui/emblem_conflict_overwritten\" /> indicates that the mod is <b>partially</b> overwritten by another.")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("<img src=\"qrc:///MO/gui/emblem_conflict_mixed\" /> indicates that both of the these are true.")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("<img src=\"qrc:///MO/gui/emblem_conflict_redundant\" /> indicates that the mod is completely overwritten. It provides no active files and is essentially disabled.");
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("There are two ways to see the individual files involved in a conflict:")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("Option A: Switch to the \"Data\" tab.")
            if (!tutorialControl.waitForTabOpen("tabWidget", "dataTab")) {
                highlightItem("tabWidget", false)
                waitForClick()
            } else {
                highlightItem("tabWidget", true)
            }
        },
        function() {
            tutorial.text = qsTr("In the \"Data\" tab, if you check the highlighted control, the tree will only show "
                               + "conflicted files. In the right column, it displays which mod is currently providing "
                               + "the file (due to having the highest priority), and if you hover your mouse over that "
                               + "info, it will list which other mods contain it.")
            highlightItem("dataTabShowOnlyConflicts", false)
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("Option B: Open the <i>Information</i> dialog of an <b>enabled</b> mod by either "
                               + "double-clicking it or selecting <i>Information...</i> from the right-click menu.")
            highlightItem("modList", true)
            manager.activateTutorial("ModInfoDialog", "tutorial_conflictresolution_modinfo.js")
            applicationWindow.modInfoDisplayed.connect(nextStep)
        },
        function() {
            unhighlight()
            tutorial.text = qsTr("That is everything you need to know about file conflicts. The second type of conflict "
                               + "to deal with is \"record conflicts\" also known as plugin load order conflicts.")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("Please open the \"Plugins\" tab...")
            highlightItem("tabWidget", true)
            if (!tutorialControl.waitForTabOpen("tabWidget", "espTab")) {
                nextStep()
            }
        },
        function() {
            tutorial.text = qsTr("In the \"First Steps\" tutorial, you learned how plugins contain changes to the game "
                               + "world, like modifications to the terrain or existing NPCs. Each of these changes is "
                               + "stored in a record, hence the name \"record conflict\". For example, when two mods "
                               + "try to change the same location, it only uses the record from the lower ordered mod .")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("As with mods, you can drag and drop plugins to change their priority, thus deciding "
                               + "which plugins take precedence in regards to conflicts. This is commonly called the "
                               + "\"Plugin load order\". The game loads plugins from top to bottom  number order "
                               + "and last loaded record in the list, gets loaded into the game .")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("Similar to the mod installation list, you will have to choose which plugins will load last/lower "
                               + "and take priority over other records. This time around however, choosing an incorrect "
                               + "order can cause your game to become unstable, as there may be strict dependencies "
                               + "between plugin files and records.")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("One common example of such records are leveled lists that contain all the items that "
                               + "may spawn at a specific character level. Traditionally, if multiple mods add items to "
                               + "such a list, only one of these mods will actually take effect. In some cases, there "
                               + "are community-made patches to resolve these issues, and tools to resolve them aswell")
            waitForClick()
        },
        function() {
            unhighlight()
            tutorial.text = qsTr("Unlike with file conflicts, MO2 can provide only minimal help, indicating whether "
                               + "required \"master\" plugins are present in the load order. The good news is, there "
                               + "is a perfect tool for that called xEdit.")
            waitForClick()
        },
        function() {
            unhighlight()
            tutorial.text = qsTr("xEdit gives you a detailed view of the records in your plugins, and allows you to "
                               + "edit or remove plugin records, aswell as resolve conflicts by helping determine "
                               + "if a mod should be placed above or below other mods by giving you a detailed view of the records in your plugins."
                               + "it also allows you to create custom patches to merge records from multiple plugins.")
            waitForClick()
        },
        function() {
            unhighlight()
            tutorial.text = qsTr("Moddinglinked's website contains guides for basic xedit usage in Resources section "
                               + "And there are guides available elsewhere, such as Youtube."
                               + "You can also ask for help on the Moddinglinked Discord server.")
            waitForClick()
        },
        function() {
            tutorial.text = qsTr("This completes the tutorial. Hopefully you have a better grasp on the intricacies of "
                               + "conflict resolution. Good luck, and happy modding!")
            waitForClick()
        }

    ]
}
