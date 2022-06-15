# Automatic Builder for Resume


### Features:
- Real time design (drag and drop)
- Build your resume without registration
- Save as json file and upload and use in future
- Export as PDF (selectable text)


### How to run
 1 - yarn install ( even if asks for chormium, just go to 2 step)
 2 - yarn dev


### Structure

    ├── pages                   # site pages (home,resume-builder,...)
    ├── public                  # images and other files
    ├── src                    
    │   ├── component           # components
    │   ├── constant            # constant (colors, key, ...)
    │   ├── lib                 # utils, ...
    │   ├── redux               # redux core and actions
    │   ├── template            # resume template (currently have only one template)
    │   ├── theme               # general stylys, ...
    │   └── types               # type for typescript
    └── ...
